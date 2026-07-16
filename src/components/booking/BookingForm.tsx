"use client";

import { useMemo, useState, useTransition } from "react";
import { bookInspection } from "@/app/actions";
import { siteConfig } from "@/lib/site-config";

const CONCERNS = [
  { label: "Active leak", sub: "Water coming in now", badge: "URGENT" },
  { label: "Storm damage", sub: "Hail, wind, fallen debris", badge: "" },
  { label: "Aging roof", sub: "Thinking about replacement", badge: "" },
  { label: "Visible damage", sub: "Missing or curling shingles", badge: "" },
  { label: "Buying / selling", sub: "Need a condition report", badge: "" },
  { label: "Just a checkup", sub: "Peace of mind", badge: "" },
];

const PHONE_RE = /^[+()\-.\s\d]{7,20}$/;

const inputCls =
  "w-full border-[1.5px] border-line-strong bg-white px-[18px] py-[13px] text-[15px] text-ink outline-none focus:border-ink";

/** Next four working days (Mon–Sat), starting tomorrow. */
function nextDays(): string[] {
  const days: string[] = [];
  const d = new Date();
  while (days.length < 4) {
    d.setDate(d.getDate() + 1);
    if (d.getDay() === 0) continue; // closed Sundays
    days.push(d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" }));
  }
  return days;
}

/**
 * Two-step inspection booking: what's going on → name/phone/address.
 * Rendered inside the site-wide modal and on the /book-an-inspection fallback page.
 */
export function BookingForm({ onClose }: { onClose?: () => void }) {
  const [step, setStep] = useState(1);
  const [concern, setConcern] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [preferredDay, setPreferredDay] = useState("As soon as possible");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);
  const [pending, startTransition] = useTransition();
  const dayChips = useMemo(() => ["As soon as possible", ...nextDays()], []);

  const detailsValid =
    name.trim().length > 1 && PHONE_RE.test(phone.trim()) && address.trim().length > 4;

  const submit = () => {
    if (!detailsValid || pending) return;
    setError("");
    startTransition(async () => {
      const res = await bookInspection({ concern, name, phone, address, preferredDay });
      if (res.ok) setDone(true);
      else setError(res.error ?? "Something went wrong — please call us instead.");
    });
  };

  if (done) {
    return (
      <div className="flex flex-col gap-4">
        <div
          aria-hidden
          className="flex h-12 w-12 items-center justify-center rounded-full bg-success text-xl text-cream"
        >
          ✓
        </div>
        <h3 className="m-0 text-[26px] font-[650] tracking-[-0.02em]">
          You&apos;re on the schedule, {name.split(" ")[0]}.
        </h3>
        <p className="m-0 text-[15px] leading-[1.6] text-muted">
          We&apos;ll call or text <strong className="text-ink">{phone}</strong> within one
          business hour to confirm your time window
          {preferredDay !== "As soon as possible" ? (
            <>
              {" "}
              for <strong className="text-ink">{preferredDay}</strong>
            </>
          ) : null}
          . The inspection takes 30–45 minutes and you&apos;ll get a written photo report.
        </p>
        <p className="m-0 text-[13.5px] text-faint">
          Active leak? Don&apos;t wait for the call back — ring{" "}
          <a href={siteConfig.phoneHref} className="font-semibold text-terracotta">
            {siteConfig.phone}
          </a>{" "}
          now.
        </p>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="mt-1 self-start border-[1.5px] border-line-strong px-6 py-3 text-sm font-semibold transition-colors hover:border-ink"
          >
            Done
          </button>
        )}
      </div>
    );
  }

  return (
    <div>
      {/* progress */}
      <div className="mb-6 flex items-center gap-4">
        <div className="relative h-[3px] flex-1 bg-line">
          <div
            className="absolute bottom-0 left-0 top-0 bg-terracotta transition-all"
            style={{ width: step === 1 ? "8%" : "55%" }}
          />
        </div>
        <span className="flex-none text-[12.5px] font-semibold text-faint">Step {step} of 2</span>
      </div>

      {step === 1 && (
        <fieldset className="m-0 border-none p-0">
          <legend className="m-0 p-0 text-[22px] font-[650] tracking-[-0.02em]">
            What&apos;s going on with your roof?
          </legend>
          <p className="mb-5 mt-1.5 text-sm text-muted">
            Pick the closest match — the inspector confirms everything on-site.
          </p>
          <div className="grid gap-2.5 sm:grid-cols-2">
            {CONCERNS.map((opt) => (
              <button
                key={opt.label}
                type="button"
                onClick={() => {
                  setConcern(opt.label);
                  setStep(2);
                }}
                className={`flex flex-col gap-0.5 border-[1.5px] px-4 py-3 text-left transition-colors ${
                  concern === opt.label
                    ? "border-ink bg-panel"
                    : "border-line-strong bg-white hover:border-ink"
                }`}
              >
                <span className="flex items-center gap-2 text-[15px] font-[650]">
                  {opt.label}
                  {opt.badge && (
                    <span className="bg-terracotta px-1.5 py-0.5 text-[9.5px] font-bold tracking-[0.08em] text-cream">
                      {opt.badge}
                    </span>
                  )}
                </span>
                <span className="text-[12.5px] text-muted">{opt.sub}</span>
              </button>
            ))}
          </div>
        </fieldset>
      )}

      {step === 2 && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submit();
          }}
        >
          <h3 className="m-0 text-[22px] font-[650] tracking-[-0.02em]">
            Where do we send the inspector?
          </h3>
          <p className="mb-5 mt-1.5 text-sm text-muted">
            {concern} · 30–45 minute visit · free written photo report.
          </p>
          <div className="flex flex-col gap-3.5">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              aria-label="Your name"
              autoComplete="name"
              required
              className={inputCls}
            />
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Mobile phone"
              aria-label="Mobile phone"
              type="tel"
              autoComplete="tel"
              required
              className={inputCls}
            />
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Property address"
              aria-label="Property address"
              autoComplete="street-address"
              required
              className={inputCls}
            />
            <div>
              <div className="mb-2 text-xs font-semibold uppercase tracking-[0.1em] text-faint">
                When works best? <span className="font-normal normal-case">(optional)</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {dayChips.map((d) => (
                  <button
                    key={d}
                    type="button"
                    aria-pressed={preferredDay === d}
                    onClick={() => setPreferredDay(d)}
                    className={`border-[1.5px] px-3.5 py-2 text-[13px] font-semibold transition-colors ${
                      preferredDay === d
                        ? "border-ink bg-ink text-cream"
                        : "border-line-strong bg-white text-ink hover:border-ink"
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="border-[1.5px] border-line-strong px-5 py-[13px] text-sm font-semibold transition-colors hover:border-ink"
            >
              ← Back
            </button>
            <button
              type="submit"
              disabled={!detailsValid || pending}
              className={`px-7 py-3.5 text-[15px] font-semibold text-cream transition-colors ${
                detailsValid && !pending ? "bg-terracotta hover:bg-terracotta-deep" : "cursor-default bg-disabled"
              }`}
            >
              {pending ? "Booking…" : "Book My Free Inspection"}
            </button>
          </div>
          <div className="mt-3 min-h-[18px] text-[13px] text-faint" role={error ? "alert" : undefined}>
            {error ||
              (!detailsValid && (name || phone || address)
                ? "Name, valid phone, and property address required"
                : "")}
          </div>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5 border-t border-line pt-4 text-[12.5px] text-muted">
            <span>✓ Free, no obligation</span>
            <span>✓ Written photo report</span>
            <span>✓ No door-knocking sales tactics</span>
          </div>
        </form>
      )}
    </div>
  );
}
