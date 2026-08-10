import { ArrowRight, Workflow } from "lucide-react";

import { SectionHeading } from "@/features/landing/components/section-heading";
import { Reveal } from "@/features/landing/components/reveal";
import { landingWorkflow } from "@/features/landing/data/landing-content";

export function WorkflowSection() {
  return (
    <section
      id="workflow"
      className="relative scroll-mt-20 border-t border-border/60 bg-muted/30"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <SectionHeading
          icon={Workflow}
          eyebrow="Workflow"
          title="From script to sound in three moves"
          description="No timelines, no plugins, no rendering queues. Nexora keeps the loop tight so ideas become audio before they cool off."
        />

        <div className="relative mt-10 grid gap-4 sm:mt-14 lg:grid-cols-3">
          {landingWorkflow.map((step, index) => (
            <Reveal key={step.step} delay={index * 100} className="relative">
              <article className="flex h-full flex-col gap-4 rounded-[24px] border border-border/60 bg-background p-5 shadow-[0_20px_60px_rgba(15,23,42,0.06)] sm:p-6">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex size-11 items-center justify-center rounded-2xl border border-border/60 bg-linear-to-br from-background to-muted/40 shadow-sm">
                    <step.icon className="size-5 text-foreground" />
                  </div>
                  <span className="rounded-md border border-border/60 bg-muted/50 px-2 py-0.5 font-mono text-xs text-muted-foreground">
                    {step.step}
                  </span>
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-base font-semibold tracking-tight text-foreground sm:text-lg">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </article>

              {index < landingWorkflow.length - 1 && (
                <ArrowRight
                  aria-hidden
                  className="absolute top-1/2 -right-3.5 z-10 hidden size-5 -translate-y-1/2 text-muted-foreground/50 lg:block"
                />
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
