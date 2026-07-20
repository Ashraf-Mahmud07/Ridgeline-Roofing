"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import type { Faq } from "@/lib/faqs";

/** Accordion list with a single open item — animated height + rotating icon. */
export function FaqAccordion({
  faqs,
  defaultOpen = 0,
  compact = false,
}: {
  faqs: Faq[];
  defaultOpen?: number;
  compact?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="flex flex-col gap-3">
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div
            key={faq.q}
            className={`overflow-hidden rounded-2xl border bg-white transition-colors duration-300 ${
              isOpen ? "border-terracotta/30 shadow-card" : "border-line"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className={`flex w-full items-center justify-between gap-5 px-6 text-left ${
                compact ? "py-4" : "py-5"
              }`}
            >
              <span className={`font-semibold text-ink ${compact ? "text-[16px]" : "text-[17px]"}`}>
                {faq.q}
              </span>
              <motion.span
                aria-hidden
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className={`flex h-8 w-8 flex-none items-center justify-center rounded-full transition-colors ${
                  isOpen ? "bg-terracotta text-white" : "bg-panel text-ink"
                }`}
              >
                <Plus className="h-4 w-4" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p
                    className={`m-0 px-6 leading-[1.7] text-muted ${
                      compact ? "pb-5 text-[14.5px]" : "pb-6 text-[15px]"
                    }`}
                  >
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
