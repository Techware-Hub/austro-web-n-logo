import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type LeadPayload = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message?: string;
  pageUrl?: string;
};

const REQUIRED_ENV = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS"] as const;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  let body: LeadPayload;
  try {
    body = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body." }, { status: 400 });
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const phone = (body.phone || "").trim();
  const service = (body.service || "").trim();
  const message = (body.message || "").trim();
  const pageUrl = (body.pageUrl || "").trim();

  if (!name || !email || !phone || !service) {
    return NextResponse.json(
      { ok: false, error: "Name, email, phone and service are required." },
      { status: 400 }
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "Invalid email address." }, { status: 400 });
  }
  if (phone.replace(/\D/g, "").length < 7) {
    return NextResponse.json({ ok: false, error: "Invalid phone number." }, { status: 400 });
  }

  const missing = REQUIRED_ENV.filter((key) => !process.env[key]);
  if (missing.length) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Email service is not configured. Set the SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS environment variables."
      },
      { status: 500 }
    );
  }

  const port = Number(process.env.SMTP_PORT);
  const receiver = process.env.LEAD_RECEIVER_EMAIL || "info@austrowebnlogo.com";
  const from = process.env.SMTP_FROM || `Austro Web & Logo Leads <${process.env.SMTP_USER}>`;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465,
    auth: {
      user: process.env.SMTP_USER as string,
      pass: process.env.SMTP_PASS as string
    }
  });

  const submittedAt = new Date().toISOString();

  const textBody =
    `New Discount Lead - Austro Web & Logo\n\n` +
    `Full Name: ${name}\n` +
    `Email: ${email}\n` +
    `Phone: ${phone}\n` +
    `Service Interested In: ${service}\n` +
    `Message: ${message || "(none)"}\n` +
    `Page URL: ${pageUrl || "(unknown)"}\n` +
    `Submitted: ${submittedAt}`;

  const htmlBody = `
    <div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#101422">
      <h2 style="margin:0 0 12px 0;color:#1f3bd6">New Discount Lead</h2>
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
      subject: "New Discount Lead - Austro Web N Logo",
      text: textBody,
      html: htmlBody
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    const detail = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ ok: false, error: `Email send failed: ${detail}` }, { status: 502 });
  }
}
