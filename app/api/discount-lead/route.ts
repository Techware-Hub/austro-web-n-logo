import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type LeadPayload = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message?: string;
  pageUrl?: string;
};

const REQUIRED_ENV = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS"] as const;
const isDev = process.env.NODE_ENV !== "production";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function safeError(error: unknown): string {
  if (error instanceof Error) return error.message;
  if (typeof error === "string") return error;
  return "Unknown error";
}

export async function POST(request: Request) {
  let body: LeadPayload;
  try {
    body = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid JSON body." },
      { status: 400 }
    );
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const phone = (body.phone || "").trim();
  const service = (body.service || "").trim();
  const message = (body.message || "").trim();
  const pageUrl = (body.pageUrl || "").trim();

  if (!name || !email || !phone || !service) {
    return NextResponse.json(
      { success: false, message: "Name, email, phone and service are required." },
      { status: 400 }
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { success: false, message: "Invalid email address." },
      { status: 400 }
    );
  }
  if (phone.replace(/\D/g, "").length < 7) {
    return NextResponse.json(
      { success: false, message: "Invalid phone number." },
      { status: 400 }
    );
  }

  const missing = REQUIRED_ENV.filter((key) => !process.env[key]);
  if (missing.length) {
    console.error("[discount-lead] missing env:", missing.join(", "));
    return NextResponse.json(
      {
        success: false,
        message:
          "Email service is not configured yet. Please contact us directly at info@austrowebnlogo.com.",
        ...(isDev ? { error: `Missing environment variables: ${missing.join(", ")}` } : {})
      },
      { status: 500 }
    );
  }

  const port = Number(process.env.SMTP_PORT);
  const explicitSecure = process.env.SMTP_SECURE;
  const secure = explicitSecure === "true" || (explicitSecure !== "false" && port === 465);
  const receiver = process.env.LEAD_RECEIVER_EMAIL || "info@austrowebnlogo.com";
  const from = process.env.SMTP_FROM || `Austro Web & Logo Leads <${process.env.SMTP_USER}>`;
  const submittedAt = new Date().toISOString();

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure,
    auth: {
      user: process.env.SMTP_USER as string,
      pass: process.env.SMTP_PASS as string
    }
  });

  const textBody =
    `New Project / Discount Lead - Austro Web N Logo\n\n` +
    `Full Name: ${name}\n` +
    `Email: ${email}\n` +
    `Phone: ${phone}\n` +
    `Service Interested In: ${service}\n` +
    `Message: ${message || "(none)"}\n` +
    `Page URL: ${pageUrl || "(unknown)"}\n` +
    `Submitted: ${submittedAt}`;

  const htmlBody = `
    <div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#101422">
      <h2 style="margin:0 0 12px 0;color:#1f3bd6">New Project / Discount Lead</h2>
      <p style="margin:0 0 16px 0;color:#475063">A visitor submitted the discount popup on austrowebnlogo.com.</p>
      <table cellpadding="6" cellspacing="0" style="border-collapse:collapse;border:1px solid #e4e7ee">
        <tr><td style="background:#f5f7fb;font-weight:700">Full Name</td><td>${escapeHtml(name)}</td></tr>
        <tr><td style="background:#f5f7fb;font-weight:700">Email</td><td>${escapeHtml(email)}</td></tr>
        <tr><td style="background:#f5f7fb;font-weight:700">Phone</td><td>${escapeHtml(phone)}</td></tr>
        <tr><td style="background:#f5f7fb;font-weight:700">Service</td><td>${escapeHtml(service)}</td></tr>
        <tr><td style="background:#f5f7fb;font-weight:700">Message</td><td>${escapeHtml(message || "(none)")}</td></tr>
        <tr><td style="background:#f5f7fb;font-weight:700">Page URL</td><td>${escapeHtml(pageUrl || "(unknown)")}</td></tr>
        <tr><td style="background:#f5f7fb;font-weight:700">Submitted</td><td>${escapeHtml(submittedAt)}</td></tr>
      </table>
    </div>
  `;

  try {
    await transporter.sendMail({
      from,
      to: receiver,
      replyTo: email,
      subject: "New Project / Discount Lead - Austro Web N Logo",
      text: textBody,
      html: htmlBody
    });
    return NextResponse.json({ success: true, message: "Lead submitted successfully." });
  } catch (error) {
    const detail = safeError(error);
    console.error("[discount-lead] sendMail failed:", detail);
    return NextResponse.json(
      {
        success: false,
        message:
          "We couldn't send your request right now. Please try again or contact us directly at info@austrowebnlogo.com.",
        ...(isDev ? { error: detail } : {})
      },
      { status: 502 }
    );
  }
}

export function GET() {
  return NextResponse.json(
    { success: false, message: "Method not allowed. Use POST." },
    { status: 405, headers: { Allow: "POST" } }
  );
}
