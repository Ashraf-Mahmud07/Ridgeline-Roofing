"use client";

import { useMemo, useState, useTransition } from "react";
import Link from "next/link";
import { bookInspection } from "@/app/actions";

const RAIL_STEPS = ["Property", "Concern", "Roof details", "Address", "Schedule", "Contact & review"];

const PROPERTY_OPTIONS = [
  { label: "Single-family home", sub: "House, townhome, or duplex" },
  { label: "Multi-family", sub: "Apartments, condos, HOA" },
  { label: "Commercial building", sub: "Office, retail, warehouse" },
  { label: "Other", sub: "Barn, church, historic, etc." },
];

const SERVICE_OPTIONS = [
  { label: "Active leak", sub: "Water coming in now", badge: "URGENT" },
  { label: "Storm damage", sub: "Hail, wind, fallen debris", badge: "" },
  { label: "Aging roof", sub: "Thinking about replacement", badge: "" },
  { label: "Visible damage", sub: "Missing or curling shingles", badge: "" },
  { label: "Buying / selling", sub: "Need a condition report", badge: "" },
  { label: "Just a checkup", sub: "Peace of mind", badge: "" },
];

const MATERIAL_OPTIONS = ["Asphalt shingle", "Metal", "Tile", "Flat / membrane", "Not sure"];
const AGE_OPTIONS = ["0–10 yrs", "10–20 yrs", "20+ yrs", "Not sure"];
const LEAK_OPTIONS = ["Yes, active", "Stains only", "No"];
const TIME_OPTIONS = ["8–10 am", "10 am–12 pm", "1–3 pm", "3–5 pm"];

/** Next five working days (Mon–Sat), starting tomorrow. */
function nextInspectionDays(): { dow: string; date: string }[] {
  const days: { dow: string; date: string }[] = [];
  const d = new Date();
  while (days.length < 5) {
    d.setDate(d.getDate() + 1);
    if (d.getDay() === 0) continue; // closed Sundays
    days.push({
      dow: d.toLocaleDateString("en-US", { weekday: "short" }),
      date: d.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
    });
  }
  return days;
}

const PHONE_RE = /^[+()\-.\s\d]{7,20}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputCls =
  "border-[1.5px] border-line-strong bg-white px-[18px] py-[15px] text-[15.5px] text-ink outline-none focus:border-ink";

type FormState = {
  property: string;
  service: string;
  material: string;
  age: string;
  leak: string;
  address: string;
  city: string;
  zip: string;
  day: string;
  time: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
};

const initialForm: FormState = {
  property: "",
  service: "",
  material: "",
  age: "",
  leak: "",
  address: "",
  city: "",
  zip: "",
  day: "",
  time: "",
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
};

function Chip({
  label,
  on,
  onClick,
  wide = false,
}: {
  label: string;
  on: boolean;
  onClick: () => void;
  wide?: boolean;
}) {
  return (
    <button
      type="button"
      aria-pressed={on}
      onClick={onClick}
      className={`border-[1.5px] px-5 py-[11px] text-sm font-semibold transition-colors ${wide ? "px-[22px] py-3" : ""} ${
        on ? "border-ink bg-ink text-cream" : "border-line-strong bg-white text-ink hover:border-ink"
      }`}
    >
      {label}
    </button>
  );
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-2.5 text-[13px] font-semibold uppercase tracking-[0.1em] text-faint">
      {children}
    </div>
  );
}

function StepHeading({ title, sub }: { title: string; sub: string }) {
  return (
    <>
      <h2 className="mb-2 mt-0 text-[26px] font-[650] tracking-[-0.02em] md:text-[30px]">{title}</h2>
      <p className="mb-7 mt-0 text-[15px] text-muted">{sub}</p>
    </>
  );
}

/** Six-step inspection booking wizard with progress rail and confirmation state. */
export function BookingWizard() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>(initialForm);
  const [error, setError] = useState("");
  const [pending, startTransition] = useTransition();
  // Step 5 only renders after user interaction, so this is always computed client-side.
  const dayOptions = useMemo(nextInspectionDays, []);

  const pick = (key: keyof FormState, value: string) => () =>
    setForm((f) => ({ ...f, [key]: value }));
  const bind = (key: keyof FormState) => ({
    value: form[key],
    onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value })),
  });

  const stepValid = (s: number) => {
    if (s === 1) return !!form.property;
    if (s === 2) return !!form.service;
    if (s === 3) return !!form.material && !!form.age && !!form.leak;
    if (s === 4) return !!(form.address.trim() && form.city.trim() && form.zip.trim());
    if (s === 5) return !!form.day && !!form.time;
    if (s === 6)
      return !!(
        form.firstName.trim() &&
        PHONE_RE.test(form.phone.trim()) &&
        EMAIL_RE.test(form.email.trim())
      );
    return false;
  };

  const valid = stepValid(step);
  const isLast = step === 6;
  const done = step === 7;

  const summary = {
    property: form.property || "—",
    service: form.service || "—",
    roof: [form.material, form.age].filter(Boolean).join(" · ") || "—",
    address: [form.address, form.city, form.zip].filter(Boolean).join(", ") || "—",
    schedule: form.day && form.time ? `${form.day}, ${form.time}` : "—",
  };

  const goNext = () => {
    if (!valid || pending) return;
    if (!isLast) {
      setStep(step + 1);
      return;
    }
    setError("");
    startTransition(async () => {
      const res = await bookInspection(form);
      if (res.ok) setStep(7);
      else setError(res.error ?? "Something went wrong — please call us instead.");
    });
  };

  let nextHint = "";
  if (!valid) {
    nextHint =
      step === 6 && (form.firstName.trim() || form.phone.trim() || form.email.trim())
        ? "Enter your name plus a valid phone and email"
        : "Fill in this step to continue";
  }

  return (
    <div className="grid min-h-[calc(100vh-63px)] lg:grid-cols-[380px_1fr]">
      {/* ===== Left rail ===== */}
      <aside className="flex flex-col gap-9 bg-ink px-6 py-11 text-cream md:px-10">
        <div>
          <div className="mb-3.5 text-[13px] font-semibold uppercase tracking-eyebrow text-terracotta-soft">
            Free inspection
          </div>
          <h1 className="m-0 text-[28px] font-[650] leading-[1.1] tracking-[-0.02em] md:text-[32px]">
            Book your roof inspection
          </h1>
          <p className="mb-0 mt-3.5 text-[14.5px] leading-[1.6] text-taupe">
            Takes about 2 minutes. You&apos;ll get a confirmed time window and a written photo
            report after the visit.
          </p>
        </div>
        <ol className="m-0 hidden list-none flex-col p-0 lg:flex">
          {RAIL_STEPS.map((label, i) => {
            const n = i + 1;
            const isDone = step > n;
            const active = step === n;
            return (
              <li key={label} className="flex items-start gap-3.5 py-[9px]">
                <span
                  aria-hidden
                  className={`flex h-[26px] w-[26px] flex-none items-center justify-center rounded-full border-[1.5px] text-[12.5px] font-bold ${
                    isDone
                      ? "border-terracotta bg-terracotta text-cream"
                      : active
                        ? "border-cream bg-cream text-ink"
                        : "border-line-dark-3 bg-transparent text-faint"
                  }`}
                >
                  {isDone ? "✓" : n}
                </span>
                <span
                  className={`pt-1 text-[14.5px] ${
                    active
                      ? "font-[650] text-cream"
                      : isDone
                        ? "font-[450] text-[#d8d2c6]"
                        : "font-[450] text-faint"
                  }`}
                >
                  {label}
                </span>
              </li>
            );
          })}
        </ol>
        <div className="mt-auto hidden flex-col gap-2.5 text-[13.5px] text-taupe lg:flex">
          <span>✓ Free, no obligation</span>
          <span>✓ Written photo report included</span>
          <span>✓ No door-knocking sales tactics</span>
        </div>
      </aside>

      {/* ===== Right panel ===== */}
      <div className="max-w-[820px] px-6 pb-14 pt-11 md:px-10 lg:px-16">
        {!done && (
          <div className="mb-9 flex items-center gap-4">
            <div className="relative h-[3px] flex-1 bg-line">
              <div
                className="absolute bottom-0 left-0 top-0 bg-terracotta transition-all"
                style={{ width: `${Math.round(((step - 1) / 6) * 100)}%` }}
              />
            </div>
            <span className="flex-none text-[12.5px] font-semibold text-faint">
              Step {step} of 6
            </span>
          </div>
        )}

        {/* STEP 1: property */}
        {step === 1 && (
          <fieldset className="m-0 border-none p-0">
            <StepHeading
              title="What kind of property is it?"
              sub="This helps us send the right crew and equipment."
            />
            <div className="grid gap-3.5 sm:grid-cols-2">
              {PROPERTY_OPTIONS.map((opt) => {
                const on = form.property === opt.label;
                return (
                  <button
                    key={opt.label}
                    type="button"
                    aria-pressed={on}
                    onClick={pick("property", opt.label)}
                    className={`flex flex-col gap-1.5 border-[1.5px] px-6 py-[22px] text-left transition-colors ${
                      on ? "border-ink bg-panel" : "border-line-strong bg-white hover:border-ink"
                    }`}
                  >
                    <span className="text-[17px] font-[650]">{opt.label}</span>
                    <span className="text-[13.5px] text-muted">{opt.sub}</span>
                  </button>
                );
              })}
            </div>
          </fieldset>
        )}

        {/* STEP 2: service */}
        {step === 2 && (
          <fieldset className="m-0 border-none p-0">
            <StepHeading
              title="What's going on with your roof?"
              sub="Pick the closest match — the inspector confirms everything on-site."
            />
            <div className="grid gap-3.5 sm:grid-cols-2">
              {SERVICE_OPTIONS.map((opt) => {
                const on = form.service === opt.label;
                return (
                  <button
                    key={opt.label}
                    type="button"
                    aria-pressed={on}
                    onClick={pick("service", opt.label)}
                    className={`flex flex-col gap-[5px] border-[1.5px] px-[22px] py-5 text-left transition-colors ${
                      on ? "border-ink bg-panel" : "border-line-strong bg-white hover:border-ink"
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      <span className="text-base font-[650]">{opt.label}</span>
                      {opt.badge && (
                        <span className="bg-terracotta px-[7px] py-0.5 text-[10px] font-bold tracking-[0.08em] text-cream">
                          {opt.badge}
                        </span>
                      )}
                    </span>
                    <span className="text-[13px] text-muted">{opt.sub}</span>
                  </button>
                );
              })}
            </div>
          </fieldset>
        )}

        {/* STEP 3: roof details */}
        {step === 3 && (
          <fieldset className="m-0 border-none p-0">
            <StepHeading title="Tell us about the roof" sub="Best guesses are fine." />
            <div className="flex flex-col gap-[26px]">
              <div>
                <FieldLabel>Current roof material</FieldLabel>
                <div className="flex flex-wrap gap-2.5">
                  {MATERIAL_OPTIONS.map((v) => (
                    <Chip key={v} label={v} on={form.material === v} onClick={pick("material", v)} />
                  ))}
                </div>
              </div>
              <div>
                <FieldLabel>Approximate roof age</FieldLabel>
                <div className="flex flex-wrap gap-2.5">
                  {AGE_OPTIONS.map((v) => (
                    <Chip key={v} label={v} on={form.age === v} onClick={pick("age", v)} />
                  ))}
                </div>
              </div>
              <div>
                <FieldLabel>Any active leaks?</FieldLabel>
                <div className="flex flex-wrap gap-2.5">
                  {LEAK_OPTIONS.map((v) => (
                    <Chip key={v} label={v} on={form.leak === v} onClick={pick("leak", v)} />
                  ))}
                </div>
              </div>
            </div>
          </fieldset>
        )}

        {/* STEP 4: address */}
        {step === 4 && (
          <fieldset className="m-0 border-none p-0">
            <StepHeading
              title="Where's the property?"
              sub="We'll confirm you're inside our service area instantly."
            />
            <div className="flex max-w-[520px] flex-col gap-4">
              <input placeholder="Street address" aria-label="Street address" className={inputCls} {...bind("address")} />
              <div className="grid grid-cols-[2fr_1fr] gap-4">
                <input placeholder="City" aria-label="City" className={inputCls} {...bind("city")} />
                <input placeholder="ZIP" aria-label="ZIP code" inputMode="numeric" className={inputCls} {...bind("zip")} />
              </div>
              <div className="flex items-center gap-2.5 bg-panel px-4 py-3 text-[13.5px] text-muted">
                <span aria-hidden className="h-2 w-2 flex-none rounded-full bg-success" />
                Photos of the damage help but aren&apos;t required — you can text them to us
                after booking.
              </div>
            </div>
          </fieldset>
        )}

        {/* STEP 5: schedule */}
        {step === 5 && (
          <fieldset className="m-0 border-none p-0">
            <StepHeading
              title="Pick a time that suits you"
              sub="Inspections take 30–45 minutes. You don't need to be on the roof — just home."
            />
            <div className="flex flex-col gap-6">
              <div>
                <FieldLabel>Day</FieldLabel>
                <div className="flex flex-wrap gap-2.5">
                  {dayOptions.map((opt) => {
                    const on = form.day === opt.date;
                    return (
                      <button
                        key={opt.date}
                        type="button"
                        aria-pressed={on}
                        onClick={pick("day", opt.date)}
                        className={`min-w-[86px] border-[1.5px] px-[18px] py-[13px] text-center transition-colors ${
                          on
                            ? "border-ink bg-ink text-cream"
                            : "border-line-strong bg-white text-ink hover:border-ink"
                        }`}
                      >
                        <span className="block text-xs font-semibold opacity-70">{opt.dow}</span>
                        <span className="block text-[15.5px] font-bold">{opt.date}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
              <div>
                <FieldLabel>Time window</FieldLabel>
                <div className="flex flex-wrap gap-2.5">
                  {TIME_OPTIONS.map((v) => (
                    <Chip key={v} label={v} on={form.time === v} onClick={pick("time", v)} wide />
                  ))}
                </div>
              </div>
            </div>
          </fieldset>
        )}

        {/* STEP 6: contact + review */}
        {step === 6 && (
          <fieldset className="m-0 border-none p-0">
            <StepHeading
              title="Last step — where do we send confirmation?"
              sub="We'll text a reminder the morning of your inspection."
            />
            <div className="grid max-w-[560px] gap-4 sm:grid-cols-2">
              <input placeholder="First name" aria-label="First name" className={inputCls} {...bind("firstName")} />
              <input placeholder="Last name" aria-label="Last name" className={inputCls} {...bind("lastName")} />
              <input placeholder="Mobile phone" aria-label="Mobile phone" type="tel" className={inputCls} {...bind("phone")} />
              <input placeholder="Email" aria-label="Email" type="email" className={inputCls} {...bind("email")} />
            </div>
            <div className="mt-7 max-w-[560px] border border-line bg-panel-soft px-6 py-5">
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.1em] text-faint">
                Your booking
              </div>
              <div className="flex flex-col gap-[7px] text-[14.5px]">
                {(
                  [
                    ["Property", summary.property],
                    ["Concern", summary.service],
                    ["Roof", summary.roof],
                    ["Address", summary.address],
                    ["Visit", summary.schedule],
                  ] as const
                ).map(([label, value]) => (
                  <div key={label} className="flex justify-between gap-4">
                    <span className="text-muted">{label}</span>
                    <span className="text-right font-semibold">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </fieldset>
        )}

        {/* CONFIRMATION */}
        {done && (
          <div className="flex max-w-[560px] flex-col gap-5 py-6">
            <div
              aria-hidden
              className="flex h-14 w-14 items-center justify-center rounded-full bg-success text-[26px] text-cream"
            >
              ✓
            </div>
            <h2 className="m-0 text-[30px] font-[650] tracking-[-0.02em] md:text-4xl">
              You&apos;re booked, {form.firstName}.
            </h2>
            <p className="m-0 text-base leading-[1.6] text-muted">
              Your inspection is confirmed for <strong className="text-ink">{summary.schedule}</strong>{" "}
              at <strong className="text-ink">{summary.address}</strong>. We&apos;ve texted a
              confirmation to {form.phone} and sent details to {form.email}.
            </p>
            <div className="flex flex-col gap-2.5 border border-line px-6 py-5 text-[14.5px] text-muted">
              <div className="text-xs font-semibold uppercase tracking-[0.1em] text-faint">
                What happens next
              </div>
              <span>1. We text you the morning of the visit with your inspector&apos;s name and photo.</span>
              <span>2. The inspection takes 30–45 minutes — roof, attic, and gutters.</span>
              <span>3. You get a written photo report with honest options. No pressure.</span>
            </div>
            <Link href="/" className="text-[14.5px] font-semibold text-terracotta hover:text-terracotta-deep">
              ← Back to homepage
            </Link>
          </div>
        )}

        {/* nav buttons */}
        {!done && (
          <div className="mt-10 flex flex-wrap items-center gap-3.5">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="border-[1.5px] border-line-strong px-7 py-3.5 text-[15px] font-semibold transition-colors hover:border-ink"
              >
                ← Back
              </button>
            )}
            <button
              type="button"
              onClick={goNext}
              disabled={!valid || pending}
              className={`px-8 py-4 text-[15px] font-semibold text-cream transition-colors ${
                valid && !pending ? "bg-ink hover:bg-terracotta" : "cursor-default bg-disabled"
              }`}
            >
              {pending ? "Booking…" : isLast ? "Confirm my inspection" : "Continue →"}
            </button>
            <span className="text-[13px] text-faint" role={error ? "alert" : undefined}>
              {error || nextHint}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
