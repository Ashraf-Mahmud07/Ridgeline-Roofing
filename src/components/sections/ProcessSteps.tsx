export type ProcessStep = { num: string; title: string; desc: string };

/**
 * Numbered step columns with hairline rules — big light numerals per the design.
 * Vertical rules and column padding only apply from md up; stacked on mobile
 * the steps read as a clean flush-left list.
 */
export function ProcessSteps({
  steps,
  numeralSize = "large",
}: {
  steps: ProcessStep[];
  numeralSize?: "large" | "medium";
}) {
  const numClass =
    numeralSize === "large" ? "text-5xl md:text-6xl" : "text-5xl md:text-[52px]";
  const cols =
    steps.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2 lg:grid-cols-4";
  return (
    <div className={`grid gap-y-10 border-line md:border-l ${cols}`}>
      {steps.map((step) => (
        <div
          key={step.num}
          className="flex flex-col gap-4 border-line pb-2 md:border-r md:px-7 lg:px-8"
        >
          <div className={`font-light leading-none tracking-[-0.03em] text-line-strong ${numClass}`}>
            {step.num}
          </div>
          <div className="text-[19px] font-[650]">{step.title}</div>
          <p className="m-0 text-[14.5px] leading-[1.6] text-muted">{step.desc}</p>
        </div>
      ))}
    </div>
  );
}
