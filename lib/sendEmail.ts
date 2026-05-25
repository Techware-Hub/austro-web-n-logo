import nodemailer from "nodemailer";

export const REQUIRED_SMTP_ENV = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS"] as const;
export type RequiredSmtpEnvKey = (typeof REQUIRED_SMTP_ENV)[number];

export type LeadField = { label: string; value: string };

export type SendLeadEmailInput = {
  subject: string;
  fields: LeadField[];
  replyTo?: string;
};

export type SendLeadEmailResult =
  | { ok: true }
  | { ok: false; reason: "missing_env"; missing: RequiredSmtpEnvKey[] }
  | { ok: false; reason: "send_failed"; error: string };

function escapeHtml(value: string) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function checkSmtpEnv(): { ok: true } | { ok: false; missing: RequiredSmtpEnvKey[] } {
  const missing = REQUIRED_SMTP_ENV.filter((k) => !process.env[k]);
  return missing.length ? { ok: false, missing } : { ok: true };
}

export function createSmtpTransporter() {
  const port = Number(process.env.SMTP_PORT);
  const explicit = process.env.SMTP_SECURE;
  const secure = explicit === "true" || (explicit !== "false" && port === 465);
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure,
    auth: {
      user: process.env.SMTP_USER as string,
      pass: process.env.SMTP_PASS as string
    }
  });
}

export async function sendLeadEmail(input: SendLeadEmailInput): Promise<SendLeadEmailResult> {
  const envCheck = checkSmtpEnv();
  if (!envCheck.ok) return { ok: false, reason: "missing_env", missing: envCheck.missing };

  const receiver = process.env.LEAD_RECEIVER_EMAIL || "info@austrowebnlogo.com";
  const from = process.env.SMTP_FROM || `Austro Web & Logo <${process.env.SMTP_USER}>`;
  const submittedAt = new Date().toISOString();
  const allFields: LeadField[] = [...input.fields, { label: "Submitted", value: submittedAt }];

  const text = allFields
    .map(({ label, value }) => `${label}: ${value || "(none)"}`)
    .join("\n");

  const rows = allFields
    .map(
      ({ label, value }) =>
        `<tr><td style="background:#f5f7fb;font-weight:700;padding:6px">${escapeHtml(label)}</td>` +
        `<td style="padding:6px">${escapeHtml(value || "(none)")}</td></tr>`
    )
    .join("");

  const html =
    `<div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#101422">` +
    `<h2 style="margin:0 0 12px 0;color:#1f3bd6">${escapeHtml(input.subject)}</h2>` +
    `<p style="margin:0 0 16px 0;color:#475063">A visitor submitted a form on austrowebnlogo.com.</p>` +
    `<table cellpadding="0" cellspacing="0" style="border-collapse:collapse;border:1px solid #e4e7ee">${rows}</table>` +
    `</div>`;

  try {
    const transporter = createSmtpTransporter();
    await transporter.sendMail({
      from,
      to: receiver,
      replyTo: input.replyTo,
      subject: input.subject,
      text,
      html
    });
    return { ok: true };
  } catch (error) {
    return {
      ok: false,
      reason: "send_failed",
      error: error instanceof Error ? error.message : String(error)
    };
  }
}
