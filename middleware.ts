import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import {
  MARKETING_DOMAIN,
  APP_DOMAIN,
  MARKETING_WWW,
  APP_WWW,
  normalizeHostname,
  isPreviewOrDev,
  isCustomerSubdomain,
} from '@/lib/config/domains';

const MARKETING_ROUTES = [
  '/products',
  '/solutions',
  '/labs',
  '/intelligence',
  '/buildos',
  '/marketplace',
  '/about',
  '/contact',
  '/privacy',
  '/terms',
];

const APP_ROUTES = [
  '/app',
  '/login',
  '/signup',
  '/agency',
  '/experiments',
  '/optimization',
  '/settings',
];

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const rawHost = request.headers.get('host');
  const hostname = normalizeHostname(rawHost);

  // 1. Allow local development & Vercel preview environments without strict apex/subdomain enforcement
  if (!hostname || isPreviewOrDev(hostname)) {
    const res = NextResponse.next();
    res.headers.set('x-domain-type', 'preview');
    return res;
  }

  // 2. WWW Canonicalization (308 Permanent Redirect)
  if (hostname === MARKETING_WWW) {
    url.protocol = 'https:';
    url.host = MARKETING_DOMAIN;
    return NextResponse.redirect(url, 308);
  }

  if (hostname === APP_WWW) {
    url.protocol = 'https:';
    url.host = APP_DOMAIN;
    return NextResponse.redirect(url, 308);
  }

  // 3. Customer Custom Subdomains (*.edcmedia.club)
  if (isCustomerSubdomain(hostname)) {
    const subdomain = hostname.replace(`.${APP_DOMAIN}`, '');
    // Rewrite customer site requests to /s/[siteSlug]
    url.pathname = `/s/${subdomain}${url.pathname}`;
    const res = NextResponse.rewrite(url);
    res.headers.set('x-domain-type', 'customer');
    res.headers.set('x-customer-site', subdomain);
    return res;
  }

  // 4. Marketing Domain (edcmediahq.xyz)
  if (hostname === MARKETING_DOMAIN) {
    // If requesting private / app routes on marketing domain, 307 redirect to app domain
    const isAppRouteRequested = APP_ROUTES.some(
      (route) => url.pathname === route || url.pathname.startsWith(`${route}/`)
    );
    if (isAppRouteRequested) {
      url.protocol = 'https:';
      url.host = APP_DOMAIN;
      return NextResponse.redirect(url, 307);
    }

    const res = NextResponse.next();
    res.headers.set('x-domain-type', 'marketing');
    return res;
  }

  // 5. Application Domain (edcmedia.club)
  if (hostname === APP_DOMAIN) {
    // Root URL -> internal rewrite to /app
    if (url.pathname === '/') {
      url.pathname = '/app';
      const res = NextResponse.rewrite(url);
      res.headers.set('x-domain-type', 'app');
      return res;
    }

    // If requesting marketing-only routes on app domain, 307 redirect to marketing domain
    const isMarketingRouteRequested = MARKETING_ROUTES.some(
      (route) => url.pathname === route || url.pathname.startsWith(`${route}/`)
    );
    if (isMarketingRouteRequested) {
      url.protocol = 'https:';
      url.host = MARKETING_DOMAIN;
      return NextResponse.redirect(url, 307);
    }

    const res = NextResponse.next();
    res.headers.set('x-domain-type', 'app');
    return res;
  }

  // Default fallback
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|assets).*)',
  ],
};
