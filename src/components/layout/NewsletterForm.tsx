"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

/** Footer newsletter capture — optimistic success state, no backend wired yet. */
export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <div className="inline-flex items-center gap-2 rounded-full bg-success/15 px-4 py-3 text-sm font-medium text-white">
        <Check className="h-4 w-4 text-success" />
        Thanks — you&apos;re on the list.
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (email.trim()) setDone(true);
      }}
      className="flex items-center gap-2 rounded-full border border-line-dark-2 bg-white/5 p-1.5 pl-4 focus-within:border-line-dark-3"
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        aria-label="Email address"
        className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-taupe"
      />
      <button
        type="submit"
        aria-label="Subscribe"
        className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-terracotta text-white transition-colors hover:bg-terracotta-deep"
      >
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}
