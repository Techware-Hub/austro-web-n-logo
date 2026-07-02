"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { contact } from "../content";

const SERVICE_OPTIONS = [
  "Logo Design",
  "Web Design",
  "Mobile Apps",
  "Digital Marketing",
  "Branding",
  "Graphic Design",
  "Print",
  "Other"
] as const;

type Status = "idle" | "submitting" | "success" | "error";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  business: "",
  location: "",
  service: SERVICE_OPTIONS[0] as string,
  message: ""
};

const isDev = process.env.NODE_ENV !== "production";
const GENERIC_ERROR =
  "We couldn't send your enquiry right now. Please try again or contact us directly at info@austrowebnlogo.com.";

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFeedback("");

    if (!form.name.trim() || !form.email.trim() || !form.service.trim()) {
      setStatus("error");
      setFeedback("Please fill in your name, email, and select a service.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      setStatus("error");
      setFeedback("Please enter a valid email address.");
      return;
    }
    if (form.phone && form.phone.replace(/\D/g, "").length < 7) {
      setStatus("error");
      setFeedback("Please enter a valid phone number.");
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          pageUrl: typeof window !== "undefined" ? window.location.href : ""
        })
      });
      const data = (await response.json().catch(() => ({}))) as {
        success?: boolean;
        message?: string;
        error?: string;
      };
      if (!response.ok || !data.success) {
        const detail = data.error || data.message || GENERIC_ERROR;
        if (isDev) console.error("[contact] failed:", response.status, detail);
        throw new Error(detail);
      }
      if (isDev) console.log("[contact] sent");
      setStatus("success");
      setFeedback(
        data.message ||
          "Thanks, we have got your enquiry. You will hear from us soon."
      );
      setForm(initialForm);
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : GENERIC_ERROR);
    }
  }

  const submitting = status === "submitting";

  return (
    <form
      className="contact-form premium-contact-form"
      id="contact-form"
      data-aos="fade-right"
      onSubmit={onSubmit}
      noValidate
    >
      <div className="form-heading">
        <p className="eyebrow">Project enquiry</p>
        <h2>Tell us what you need.</h2>
      </div>

      <label>
        Full Name *
        <input
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Your full name"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
      </label>
      <label>
        Email Address *
        <input
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      </label>
      <label>
        Phone
        <input
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="04xx xxx xxx or 0x xxxx xxxx"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
      </label>
      <label>
        Business Name
        <input
          name="business"
          type="text"
          autoComplete="organization"
          placeholder="Your business name"
          value={form.business}
          onChange={(e) => setForm({ ...form, business: e.target.value })}
        />
      </label>
      <label>
        Suburb / State
        <input
          name="location"
          type="text"
          placeholder="Melbourne, VIC"
          value={form.location}
          onChange={(e) => setForm({ ...form, location: e.target.value })}
        />
      </label>
      <label>
        What can we help with?
        <select
          name="service"
          value={form.service}
          onChange={(e) => setForm({ ...form, service: e.target.value })}
        >
          {SERVICE_OPTIONS.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>
      </label>
      <label>
        Tell us about your project
        <textarea
          name="message"
          rows={6}
          placeholder="Share your goals, timeline, budget range, or package preference."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
      </label>

      <button className="button primary" type="submit" disabled={submitting}>
        {submitting ? "Sending..." : "Send Enquiry"} <ArrowRight size={18} aria-hidden="true" />
      </button>

      {status === "success" && (
        <p className="form-note form-note-success" role="status" aria-live="polite">{feedback}</p>
      )}
      {status === "error" && (
        <p className="form-note form-note-error" role="alert">{feedback}</p>
      )}
      {status === "idle" && (
        <p className="form-note">
          Replies arrive at <a href={`mailto:${contact.email}`}>{contact.email}</a> within one
          business day. If it is urgent, call <a href={`tel:${contact.phoneTel}`}>{contact.phone}</a>.
        </p>
      )}
      {submitting && (
        <p className="form-note" role="status" aria-live="polite">Sending your enquiry...</p>
      )}
    </form>
  );
}
