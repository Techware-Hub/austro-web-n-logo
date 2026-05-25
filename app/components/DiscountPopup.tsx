"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { Sparkles, X } from "lucide-react";

const STORAGE_KEY = "austro_discount_popup_seen";
const SHOW_DELAY_MS = 6500;

const serviceOptions = [
  "Logo Design",
  "Website Design & Development",
  "Digital Marketing",
  "Brand Services",
  "Graphic Design",
  "Print Services",
  "Mobile App Development",
  "Other"
] as const;

type Status = "idle" | "submitting" | "success" | "error";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  service: serviceOptions[0] as string,
  message: ""
};

export default function DiscountPopup() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const firstFieldRef = useRef<HTMLInputElement | null>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      if (window.localStorage.getItem(STORAGE_KEY)) return;
    } catch {
      // localStorage unavailable — still allow popup
    }
    const timer = window.setTimeout(() => setOpen(true), SHOW_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;

    previousFocusRef.current = document.activeElement as HTMLElement | null;
    document.documentElement.style.overflow = "hidden";
    const focusTimer = window.setTimeout(() => firstFieldRef.current?.focus(), 80);

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        dismiss();
        return;
      }
      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
      previousFocusRef.current?.focus?.();
    };
  }, [open]);

  function markSeen() {
    try {
      window.localStorage.setItem(STORAGE_KEY, String(Date.now()));
    } catch {
      // ignore
    }
  }

  function dismiss() {
    setOpen(false);
    markSeen();
  }

  function onOverlayClick(event: React.MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) dismiss();
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMsg("");

    if (!form.name.trim() || !form.email.trim() || !form.phone.trim() || !form.service.trim()) {
      setErrorMsg("Please fill in your name, email, phone, and select a service.");
      setStatus("error");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      setErrorMsg("Please enter a valid email address.");
      setStatus("error");
      return;
    }
    if (form.phone.replace(/\D/g, "").length < 7) {
      setErrorMsg("Please enter a valid phone number.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch("/api/discount-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          pageUrl: typeof window !== "undefined" ? window.location.href : ""
        })
      });
      const data = (await response.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!response.ok || !data.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }
      setStatus("success");
      setForm(initialForm);
      markSeen();
    } catch (error) {
      setStatus("error");
      setErrorMsg(error instanceof Error ? error.message : "Submission failed.");
    }
  }

  if (!open) return null;

  return (
    <div className="discount-overlay" onMouseDown={onOverlayClick} role="presentation">
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="discount-title"
        aria-describedby="discount-subtitle"
        className="discount-dialog"
      >
        <button type="button" className="discount-close" aria-label="Close discount offer" onClick={dismiss}>
          <X size={20} aria-hidden="true" />
        </button>

        <div className="discount-art">
          <Image
            src="/assets/images/discount-illustration.svg"
            alt="Limited-time discount badge for Austro Web and Logo design services"
            className="discount-art-image"
            width={520}
            height={520}
            priority
            unoptimized
          />
        </div>

        <div className="discount-body">
          {status === "success" ? (
            <div className="discount-success" role="status" aria-live="polite">
              <span className="discount-success-mark"><Sparkles size={28} aria-hidden="true" /></span>
              <h2 id="discount-title">You&apos;re in.</h2>
              <p>Thanks! Our team will reach out within one business day with your custom discounted quote.</p>
              <button type="button" className="button primary" onClick={dismiss}>Close</button>
            </div>
          ) : (
            <>
              <p className="discount-eyebrow">Limited-time offer</p>
              <h2 id="discount-title">Get an Exclusive Discount on Your Next Project</h2>
              <p id="discount-subtitle" className="discount-subtitle">
                Claim your limited-time offer on logo design, website design, branding, and digital solutions.
              </p>
              <p className="discount-offer">
                Fill out the form and our team will contact you with a custom discounted quote.
              </p>

              <form className="discount-form" onSubmit={onSubmit} noValidate>
                <label>
                  <span>Full Name *</span>
                  <input
                    ref={firstFieldRef}
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your full name"
                  />
                </label>
                <label>
                  <span>Email Address *</span>
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                  />
                </label>
                <label>
                  <span>Phone Number *</span>
                  <input
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="04xx xxx xxx"
                  />
                </label>
                <label>
                  <span>Service Interested In *</span>
                  <select
                    name="service"
                    required
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                  >
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </label>
                <label className="discount-form-full">
                  <span>Message / Project Details</span>
                  <textarea
                    name="message"
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Share your goals, timeline, or budget range."
                  />
                </label>

                {status === "error" && errorMsg && (
                  <p className="discount-error" role="alert">{errorMsg}</p>
                )}

                <div className="discount-actions">
                  <button type="button" className="discount-later" onClick={dismiss} disabled={status === "submitting"}>
                    Maybe Later
                  </button>
                  <button type="submit" className="button primary discount-submit" disabled={status === "submitting"}>
                    {status === "submitting" ? "Sending..." : "Claim My Discount"}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
