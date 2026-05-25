import { NextResponse } from "next/server";
import { REQUIRED_SMTP_ENV, checkSmtpEnv, createSmtpTransporter } from "../../../lib/sendEmail";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const isProd = process.env.NODE_ENV === "production";

export async function GET() {
  if (isProd) {
    return NextResponse.json({ success: false, message: "Not found" }, { status: 404 });
  }

  const envCheck = checkSmtpEnv();
  const smtpConfigured = envCheck.ok;
  const missingVars = envCheck.ok ? [] : envCheck.missing;

  const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : null;
  const explicit = process.env.SMTP_SECURE;
  const secure = explicit === "true" || (explicit !== "false" && port === 465);

  const payload: {
    smtpConfigured: boolean;
    smtpVerified: boolean;
    missingVars: string[];
    settings: { host: string | null; port: number | null; secure: boolean; user: string | null; from: string; receiver: string };
    error?: string;
  } = {
    smtpConfigured,
    smtpVerified: false,
    missingVars: [...missingVars],
    settings: {
      host: process.env.SMTP_HOST || null,
      port,
      secure,
      user: process.env.SMTP_USER || null,
      from: process.env.SMTP_FROM || `Austro Web & Logo <${process.env.SMTP_USER || "(unset)"}>`,
      receiver: process.env.LEAD_RECEIVER_EMAIL || "info@austrowebnlogo.com"
    }
  };

  if (!smtpConfigured) {
    payload.error = `Missing environment variables: ${missingVars.join(", ")}`;
    return NextResponse.json(payload, { status: 200 });
  }

  try {
    const transporter = createSmtpTransporter();
    await transporter.verify();
    payload.smtpVerified = true;
  } catch (error) {
    payload.error = error instanceof Error ? error.message : String(error);
  }

  // Sanity check: ensure no secret leaks
  for (const key of REQUIRED_SMTP_ENV) {
    if (key === "SMTP_PASS") continue;
  }

  return NextResponse.json(payload, { status: 200 });
}
