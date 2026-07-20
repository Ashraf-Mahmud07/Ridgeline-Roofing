"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { sendContactMessage } from "@/app/actions";
import { siteConfig } from "@/lib/site-config";

const TOPICS = [
  "General question",
  "Quote follow-up",
  "Warranty claim",
  "Commercial inquiry",
  "Something else",
];

const inputCls =
  "rounded-xl border-[1.5px] border-line-strong bg-white px-4 py-3.5 text-[15px] text-ink outline-none transition-colors focus:border-terracotta focus:ring-4 focus:ring-terracotta/10";

/** Contact form — client-side validation, server action submit, success state. */
export function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", topic: "", message: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [pending, startTransition] = useTransition();

  const bind = (key: keyof typeof form) => ({
    value: form[key],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm({ ...form, [key]: e.target.value }),
  });

  const valid = form.name.trim() && form.phone.trim() && form.message.trim();

  const submit = () => {
    if (!valid || pending) return;
    setError("");
    startTransition(async () => {
      const res = await sendContactMessage(form);
      if (res.ok) setSent(true);
      else setError(res.error ?? "Something went wrong — please call us instead.");
    });
  };

  if (sent) {
    return (
      <div className="flex max-w-[520px] flex-col gap-[18px] pt-3">
        <div
          aria-hidden
          className="flex h-13 w-13 items-center justify-center rounded-full bg-success text-2xl text-white"
        >
          ✓
        </div>
        <h2 className="m-0 text-[26px] font-[650] tracking-[-0.02em] md:text-[32px]">
          Thanks, {form.name} — message received.
        </h2>
        <p className="m-0 text-[15.5px] leading-[1.6] text-muted">
          Someone from our office will get back to you within one business hour (
          {siteConfig.hours}). If it&apos;s urgent, call{" "}
          <strong className="text-ink">{siteConfig.phone}</strong>.
        </p>
        <div className="border border-line px-[22px] py-[18px] text-sm leading-[1.6] text-muted">
          While you wait: see{" "}
          <Link href="/projects" className="text-terracotta hover:text-terracotta-deep">
            recent projects
          </Link>
          , or read{" "}
          <Link href="/blog" className="text-terracotta hover:text-terracotta-deep">
            the Learning Center
          </Link>
          .
        </div>
        <Link href="/" className="text-sm font-semibold text-terracotta hover:text-terracotta-deep">
          ← Back to homepage
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h2 className="mb-1.5 mt-0 text-2xl font-[650] tracking-[-0.02em]">Send us a message</h2>
      <p className="mb-[26px] mt-0 text-[14.5px] text-muted">
        For inspections, the{" "}
        <Link href="/book-an-inspection" className="text-terracotta hover:text-terracotta-deep">
          2-minute booking form
        </Link>{" "}
        is faster.
      </p>
      <form
        className="flex max-w-[560px] flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          submit();
        }}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <input placeholder="Full name" aria-label="Full name" required className={inputCls} {...bind("name")} />
          <input placeholder="Phone" aria-label="Phone" type="tel" required className={inputCls} {...bind("phone")} />
        </div>
        <input placeholder="Email" aria-label="Email" type="email" className={inputCls} {...bind("email")} />
        <div>
          <div className="mb-2.5 text-[13px] font-semibold uppercase tracking-[0.1em] text-faint">
            What&apos;s this about?
          </div>
          <div className="flex flex-wrap gap-2.5">
            {TOPICS.map((t) => {
              const on = form.topic === t;
              return (
                <button
                  key={t}
                  type="button"
                  aria-pressed={on}
                  onClick={() => setForm({ ...form, topic: t })}
                  className={`rounded-full border-[1.5px] px-4 py-2.5 text-[13.5px] font-semibold transition-colors ${
                    on
                      ? "border-ink bg-ink text-white"
                      : "border-line-strong bg-white text-ink hover:border-ink"
                  }`}
                >
                  {t}
                </button>
              );
            })}
          </div>
        </div>
        <textarea
          placeholder="Your message"
          aria-label="Your message"
          rows={5}
          required
          className={`${inputCls} resize-y`}
          {...bind("message")}
        />
        <div className="flex flex-wrap items-center gap-3.5">
          <button
            type="submit"
            disabled={!valid || pending}
            className={`rounded-full px-8 py-3.5 text-[15px] font-semibold text-white transition-all ${
              valid && !pending
                ? "bg-terracotta shadow-[0_10px_30px_-12px_rgba(249,115,22,0.7)] hover:-translate-y-0.5 hover:bg-terracotta-deep"
                : "cursor-default bg-disabled"
            }`}
          >
            {pending ? "Sending…" : "Send message"}
          </button>
          <span className="text-[13px] text-faint" role={error ? "alert" : undefined}>
            {error || (!valid ? "Name, phone, and a message required" : "")}
          </span>
        </div>
      </form>
    </div>
  );
}
