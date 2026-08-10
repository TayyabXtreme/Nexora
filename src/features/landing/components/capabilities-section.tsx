import { AudioLines } from "lucide-react";

import { SectionHeading } from "@/features/landing/components/section-heading";
import { Reveal } from "@/features/landing/components/reveal";
import { landingCapabilities } from "@/features/landing/data/landing-content";

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="relative scroll-mt-20 border-t border-border/60">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <SectionHeading
          icon={AudioLines}
          eyebrow="Capabilities"
          title="A serious engine for synthetic voice"
          description="Everything in Nexora is built around one job: giving you believable, controllable voice performance on demand."
        />

        <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2">
          {landingCapabilities.map((capability, index) => (
            <Reveal key={capability.title} delay={index * 80}>
              <article className="group relative h-full overflow-hidden rounded-[24px] border border-border/60 bg-linear-to-br from-background via-background to-muted/35 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.06)] transition-transform duration-300 motion-safe:hover:-translate-y-1 sm:p-6">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.06),transparent_45%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex flex-col gap-4">
                  <div className="flex size-11 items-center justify-center rounded-2xl border border-border/60 bg-background shadow-sm">
                    <capability.icon className="size-5 text-foreground" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-base font-semibold tracking-tight text-foreground sm:text-lg">
                      {capability.title}
                    </h3>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {capability.description}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
