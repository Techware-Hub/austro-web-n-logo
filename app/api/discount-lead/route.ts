import { NextResponse } from "next/server";
import { sendLeadEmail } from "../../../lib/sendEmail";

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

const isDev = process.env.NODE_ENV !== "production";

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
    return NextResponse.json({ success: false, message: "Invalid email address." }, { status: 400 });
  }
  if (phone.replace(/\D/g, "").length < 7) {
    return NextResponse.json({ success: false, message: "Invalid phone number." }, { status: 400 });
  }

  const result = await sendLeadEmail({
    subject: "New Discount Lead - Austro Web N Logo",
    replyTo: email,
    fields: [
      { label: "Full Name", value: name },
      { label: "Email", value: email },
      { label: "Phone", value: phone },
      { label: "Service Interested In", value: service },
      { label: "Message", value: message },
      { label: "Page URL", value: pageUrl }
    ]
  });

  if (result.ok) {
    return NextResponse.json({ success: true, message: "Lead submitted successfully." });
  }

  if (result.reason === "missing_env") {
    console.error("[discount-lead] missing env:", result.missing.join(", "));
    return NextResponse.json(
      {
        success: false,
        message:
          "Email service is not configured yet. Please contact us directly at info@austrowebnlogo.com.",
        ...(isDev ? { error: `Missing environment variables: ${result.missing.join(", ")}` } : {})
      },
      { status: 500 }
    );
  }

  console.error("[discount-lead] sendMail failed:", result.error);
  return NextResponse.json(
    {
      success: false,
      message:
        "We couldn't send your request right now. Please try again or contact us directly at info@austrowebnlogo.com.",
      ...(isDev ? { error: result.error } : {})
    },
    { status: 502 }
  );
}

export function GET() {
  return NextResponse.json(
    { success: false, message: "Method not allowed. Use POST." },
    { status: 405, headers: { Allow: "POST" } }
  );
}
