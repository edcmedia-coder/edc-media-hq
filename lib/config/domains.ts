export const MARKETING_DOMAIN = process.env.NEXT_PUBLIC_MARKETING_DOMAIN || 'edcmediahq.xyz';
export const APP_DOMAIN = process.env.NEXT_PUBLIC_APP_DOMAIN || 'edcmedia.club';

export const MARKETING_WWW = `www.${MARKETING_DOMAIN}`;
export const APP_WWW = `www.${APP_DOMAIN}`;

export function normalizeHostname(host: string | null): string {
  if (!host) return '';
  return host
    .toLowerCase()
    .replace(/:\d+$/, '') // remove port
    .replace(/\.$/, ''); // remove trailing dot
}

export function isPreviewOrDev(hostname: string): boolean {
  return (
    hostname === 'localhost' ||
    hostname === '127.0.0.1' ||
    hostname.endsWith('.run.app') ||
    hostname.endsWith('.vercel.app') ||
    hostname.includes('ai-studio') ||
    hostname.includes('preview')
  );
}

export function isCustomerSubdomain(hostname: string): boolean {
  if (!hostname.endsWith(`.${APP_DOMAIN}`)) return false;
  const subdomain = hostname.replace(`.${APP_DOMAIN}`, '');
  return subdomain !== '' && subdomain !== 'www' && subdomain !== 'app';
}
