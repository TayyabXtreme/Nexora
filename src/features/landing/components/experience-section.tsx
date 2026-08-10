import Link from "next/link";
import { ArrowRight, Clapperboard } from "lucide-react";

import { SectionHeading } from "@/features/landing/components/section-heading";
import { Reveal } from "@/features/landing/components/reveal";
import { quickActions } from "@/features/dashboard/data/quick-actions";
import { cn } from "@/lib/utils";

export function ExperienceSection() {
  return (
    <section id="use-cases" className="relative scroll-mt-20 border-t border-border/60 bg-muted/30">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <SectionHeading
          icon={Clapperboard}
          eyebrow="Use cases"
          title="One studio, every scene"
          description="Story time to sold out — jump in with a prepared script and hear real takes in seconds."
        />

        <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {quickActions.map((action, index) => (
            <Reveal key={action.title} delay={(index % 3) * 80}>
              <Link
                href={action.href}
                className="group flex h-full flex-col gap-4 rounded-xl border bg-card p-3 outline-none transition-transform duration-300 motion-safe:hover:-translate-y-1 focus-visible:ring-3 focus-visible:ring-ring/50"
              >
                <div
                  aria-hidden
                  className={cn(
                    "relative h-24 shrink-0 overflow-hidden rounded-xl bg-linear-to-br",
                    action.gradient,
                  )}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="size-10 rounded-full bg-white/30" />
                  </div>
                  <div className="absolute inset-2 rounded-lg ring-2 ring-inset ring-white/20" />
                </div>

                <div className="flex flex-1 flex-col justify-between gap-4 px-1 pb-1">
                  <div className="space-y-1">
                    <h3 className="text-sm font-medium text-foreground">
                      {action.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      {action.description}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                    Try in the studio
                    <ArrowRight className="size-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
