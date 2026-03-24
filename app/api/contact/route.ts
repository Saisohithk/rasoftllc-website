import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, company, serviceArea, clearanceLevel, message } = await req.json();

    if (!firstName || !email) {
      return NextResponse.json(
        { success: false, message: 'First name and email are required.' },
        { status: 400 }
      );
    }

    // Log submission (replace with email service like Resend/SendGrid in production)
    console.log('📥 Contact submission:', { firstName, lastName, email, company, serviceArea, clearanceLevel });

    return NextResponse.json({
      success: true,
      message: 'Request received. A specialist will respond within 1 business day.',
    });
  } catch {
    return NextResponse.json({ success: false, message: 'Server error.' }, { status: 500 });
  }
}
