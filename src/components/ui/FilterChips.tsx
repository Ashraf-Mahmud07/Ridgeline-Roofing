"use client";

/** Selectable chip row used by project/blog/FAQ filters. */
export function FilterChips({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {options.map((opt) => {
        const on = value === opt;
        return (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            aria-pressed={on}
            className={`border-[1.5px] px-5 py-2.5 text-sm font-semibold transition-colors ${
              on
                ? "border-ink bg-ink text-cream"
                : "border-line-strong bg-cream text-muted hover:border-ink"
            }`}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}
