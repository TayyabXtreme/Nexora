import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Reveal } from "@/features/landing/components/reveal";

interface SectionHeadingProps {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
}

export function SectionHeading({
  icon: Icon,
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "mx-auto flex max-w-2xl flex-col items-center gap-3 text-center text-balance",
        className,
      )}
    >
      <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/80 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground shadow-sm backdrop-blur">
        <Icon className="size-3.5" />
        {eyebrow}
      </div>
      <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      <p className="text-sm leading-6 text-muted-foreground sm:text-base">
        {description}
      </p>
    </Reveal>
  );
}
