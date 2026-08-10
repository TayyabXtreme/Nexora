import { LayoutGrid, SlidersHorizontal } from "lucide-react";

import { SectionHeading } from "@/features/landing/components/section-heading";
import { Reveal } from "@/features/landing/components/reveal";
import { sliders } from "@/features/text-to-speech/data/sliders";
import { VOICE_CATEGORY_LABELS } from "@/features/voices/data/voice-categories";

const sliderPosition = (value: number, min: number, max: number) =>
  `${Math.round(((value - min) / (max - min)) * 100)}%`;

export function FeaturesSection() {
  return (
    <section id="features" className="relative scroll-mt-20 border-t border-border/60">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <SectionHeading
          icon={SlidersHorizontal}
          eyebrow="Features"
          title="Built like an instrument, not a black box"
          description="The same controls you will find inside the studio — expressive direction on the left, a voice library for every genre on the right."
        />

        <div className="mt-10 grid gap-4 sm:mt-14 lg:grid-cols-2">
          <Reveal>
            <article className="flex h-full flex-col gap-5 rounded-[24px] border border-border/60 bg-linear-to-br from-background via-background to-muted/35 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.06)] sm:p-6">
              <div className="space-y-1.5">
                <h3 className="text-base font-semibold tracking-tight text-foreground sm:text-lg">
                  Tune every performance
                </h3>
                <p className="text-sm leading-6 text-muted-foreground">
                  Four directable dimensions — straight from the studio&apos;s
                  generation panel.
                </p>
              </div>

              <div className="flex flex-1 flex-col justify-center gap-6">
                {sliders.map((slider) => (
                  <div key={slider.id} className="space-y-2">
                    <div className="flex items-center justify-between gap-2 text-xs">
                      <span className="font-medium text-foreground">
                        {slider.label}
                      </span>
                      <span className="flex items-center gap-2 text-[11px] text-muted-foreground">
                        {slider.leftLabel}
                        <span aria-hidden className="text-border">·</span>
                        {slider.rightLabel}
                      </span>
                    </div>
                    <div
                      aria-hidden
                      className="relative h-1.5 rounded-full bg-muted"
                    >
                      <div
                        className="absolute inset-y-0 left-0 rounded-full bg-linear-to-r from-[#2DD4BF] via-[#38BDF8] to-[#818CF8]"
                        style={{
                          width: sliderPosition(
                            slider.defaultValue,
                            slider.min,
                            slider.max,
                          ),
                        }}
                      />
                      <div
                        className="absolute top-1/2 size-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border bg-background shadow-sm"
                        style={{
                          left: sliderPosition(
                            slider.defaultValue,
                            slider.min,
                            slider.max,
                          ),
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>

          <Reveal delay={100}>
            <article className="flex h-full flex-col gap-5 rounded-[24px] border border-border/60 bg-linear-to-br from-background via-background to-muted/35 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.06)] sm:p-6">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <LayoutGrid className="size-4 text-foreground" />
                  <h3 className="text-base font-semibold tracking-tight text-foreground sm:text-lg">
                    A voice for every kind of story
                  </h3>
                </div>
                <p className="text-sm leading-6 text-muted-foreground">
                  Twelve curated categories — and your own clones — scoped to
                  your workspace.
                </p>
              </div>

              <div className="flex flex-1 flex-wrap content-start gap-2">
                {Object.values(VOICE_CATEGORY_LABELS).map((category) => (
                  <span
                    key={category}
                    className="inline-flex items-center rounded-full border border-border/70 bg-background/80 px-3 py-1.5 text-[13px] font-medium text-muted-foreground shadow-sm transition-colors hover:text-foreground"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
