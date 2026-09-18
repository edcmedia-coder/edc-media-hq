import { NextRequest, NextResponse } from 'next/server';

interface ContactPayload {
  name?: string;
  email?: string;
  organization?: string;
  inquiryType?: string;
  message?: string;
}

const VALID_INQUIRY_TYPES = ['BUILD', 'INTELLIGENCE', 'AUTOMATION', 'LABS', 'GENERAL'] as const;

export async function POST(request: NextRequest) {
  try {
    const body: ContactPayload = await request.json().catch(() => ({}));

    const name = typeof body.name === 'string' ? body.name.trim() : '';
    const email = typeof body.email === 'string' ? body.email.trim() : '';
    const organization = typeof body.organization === 'string' ? body.organization.trim() : '';
    const inquiryType = typeof body.inquiryType === 'string' ? body.inquiryType.trim().toUpperCase() : 'BUILD';
    const message = typeof body.message === 'string' ? body.message.trim() : '';

    // Field-level validations
    const errors: Record<string, string> = {};

    if (!name || name.length < 2) {
      errors.name = 'Name must be at least 2 characters.';
    } else if (name.length > 100) {
      errors.name = 'Name must not exceed 100 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      errors.email = 'Please provide a valid work email address.';
    } else if (email.length > 150) {
      errors.email = 'Email must not exceed 150 characters.';
    }

    if (!message || message.length < 10) {
      errors.message = 'Brief must contain at least 10 characters describing your inquiry.';
    } else if (message.length > 3000) {
      errors.message = 'Brief must not exceed 3000 characters.';
    }

    if (!VALID_INQUIRY_TYPES.includes(inquiryType as any)) {
      errors.inquiryType = 'Invalid inquiry type selected.';
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed. Please correct the highlighted fields.',
          fieldErrors: errors,
        },
        { status: 400 }
      );
    }

    // Generate unique verification dispatch identifier
    const randomSuffix = Math.random().toString(36).substring(2, 7).toUpperCase();
    const dispatchId = `EDC-${Date.now().toString(36).toUpperCase()}-${randomSuffix}`;
    const timestamp = new Date().toISOString();

    // Log the operational dispatch server-side
    console.info('[EDC DISPATCH LOG]', {
      dispatchId,
      timestamp,
      name,
      email,
      organization: organization || 'N/A',
      inquiryType,
      messageLength: message.length,
    });

    return NextResponse.json(
      {
        success: true,
        dispatchId,
        timestamp,
        inquiryType,
        recipient: 'EDC Media HQ Engineering Architecture Group',
      },
      { status: 200 }
    );
  } catch (err) {
    console.error('[EDC DISPATCH ERROR]', err);
    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error processing dispatch. Please try again or use direct mail fallback.',
      },
      { status: 500 }
    );
  }
}
