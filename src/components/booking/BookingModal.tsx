"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import { BookingForm } from "@/components/booking/BookingForm";
import { siteConfig } from "@/lib/site-config";

/**
 * Site-wide booking modal. Mounted once in the root layout; it intercepts
 * clicks on any link to /book-an-inspection and opens the dialog instead.
 * Without JavaScript the links still navigate to the fallback page, so
 * booking always works.
 */
export function BookingModalHost() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const pathname = usePathname();

  const close = useCallback(() => {
    setOpen(false);
    returnFocusRef.current?.focus();
  }, []);

  // Intercept booking links everywhere (capture phase beats Next's Link handler).
  useEffect(() => {
    // On the fallback page itself, let links behave normally.
    if (pathname === "/book-an-inspection") return;
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey)
        return;
      const target = e.target as HTMLElement;
      const link = target.closest('a[href="/book-an-inspection"]');
      if (!link) return;
      e.preventDefault();
      e.stopPropagation();
      returnFocusRef.current = link as HTMLElement;
      setOpen(true);
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [pathname]);

  // Escape to close + scroll lock + initial focus.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "Tab" && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>("button, input")?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-ink/60 p-0 sm:items-center sm:p-6"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Book a free roof inspection"
        className="max-h-[92vh] w-full max-w-[560px] overflow-y-auto border border-line bg-cream shadow-[0_24px_64px_rgba(43,41,38,0.25)]"
      >
        <div className="flex items-start justify-between gap-4 border-b border-line px-6 py-5 sm:px-8">
          <div>
            <div className="text-[12px] font-semibold uppercase tracking-eyebrow text-terracotta">
              Free inspection
            </div>
            <h2 className="m-0 mt-1 text-xl font-[650] tracking-[-0.02em]">
              Book your roof inspection
            </h2>
            <p className="m-0 mt-1 text-[13px] text-muted">
              About 60 seconds — or call{" "}
              <a href={siteConfig.phoneHref} className="font-semibold text-ink">
                {siteConfig.phone}
              </a>
            </p>
          </div>
          <button
            type="button"
            onClick={close}
            aria-label="Close booking dialog"
            className="flex h-9 w-9 flex-none items-center justify-center border border-line-strong text-lg leading-none text-muted transition-colors hover:border-ink hover:text-ink"
          >
            ×
          </button>
        </div>
        <div className="px-6 py-6 sm:px-8">
          <BookingForm onClose={close} />
        </div>
      </div>
    </div>,
    document.body
  );
}
