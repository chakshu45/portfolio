import { NextResponse } from "next/server";

// In-memory rate limiting map for basic spam protection
const rateLimitMap = new Map();

export async function POST(request) {
  try {
    const ip = request.headers.get("x-forwarded-for") || "unknown";
    const now = Date.now();
    const lastRequest = rateLimitMap.get(ip) || 0;

    // Rate limit: 1 request every 5 seconds per IP
    if (now - lastRequest < 5000) {
      return NextResponse.json(
        { success: false, error: "Please wait a moment before sending another message." },
        { status: 429 }
      );
    }
    rateLimitMap.set(ip, now);

    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid name (at least 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { success: false, error: "Please write a message with at least 10 characters." },
        { status: 400 }
      );
    }

    // Clean data
    const contactSubmission = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: (subject || "New Portfolio Contact").trim(),
      message: message.trim(),
      receivedAt: new Date().toISOString(),
      clientIp: ip,
    };

    // Log the contact entry
    console.log("=== [PORTFOLIO CONTACT FORM SUBMISSION] ===");
    console.log(JSON.stringify(contactSubmission, null, 2));

    // Optional: If an email service like Resend or Nodemailer is configured in process.env, it can be called here.
    // e.g. if (process.env.RESEND_API_KEY) { await sendEmail(contactSubmission); }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you, Akash has received your message and will get back to you soon!",
        timestamp: contactSubmission.receivedAt,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred while sending your message. Please try again or reach out directly at chaskhupatial@gmail.com.",
      },
      { status: 500 }
    );
  }
}
