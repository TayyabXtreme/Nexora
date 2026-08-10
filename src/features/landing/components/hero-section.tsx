import { Show } from "@clerk/nextjs";
import { Sparkles } from "lucide-react";

import { HeroWave } from "@/features/landing/components/hero-wave";
import {
  GetStartedButton,
  GoToDashboardButton,
  HowItWorksButton,
} from "@/features/landing/components/cta-buttons";
import { landingValueProps } from "@/features/landing/data/landing-content";

const EQUALIZER_BARS = [
  14, 22, 34, 48, 64, 82, 100, 82, 64, 48, 34, 48, 64, 82, 100, 82, 64, 48,
  34, 22, 14,
];

const EQUALIZER_COLORS = ["#2DD4BF", "#22D3EE", "#38BDF8", "#818CF8"];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <HeroWave />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.08),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(129,140,248,0.07),transparent_35%)]" />

      <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center gap-6 px-4 pt-16 pb-16 text-center text-balance sm:px-6 sm:pt-24 sm:pb-24">
        <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/80 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground shadow-sm backdrop-blur">
          <Sparkles className="size-3.5" />
          AI voice studio
        </div>

        <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          Give every word
          <span className="block bg-linear-to-r from-[#2DD4BF] via-[#38BDF8] to-[#818CF8] bg-clip-text text-transparent">
            a voice of its own.
          </span>
        </h1>

        <p className="max-w-2xl text-sm leading-6 text-muted-foreground sm:text-lg sm:leading-8">
          Nexora turns plain text into expressive, production-ready voiceovers.
          Clone a voice, direct the performance with precision controls, and
          ship studio-grade audio — all from one focused workspace.
        </p>

        <div className="flex flex-col items-center gap-3 pt-1 sm:flex-row">
          <Show when="signed-out">
            <GetStartedButton size="lg" />
            <HowItWorksButton />
          </Show>
          <Show when="signed-in">
            <GoToDashboardButton size="lg" />
            <HowItWorksButton />
          </Show>
        </div>

        <div
          className="flex h-16 items-center justify-center gap-1.5 pt-2"
          aria-hidden
        >
          {EQUALIZER_BARS.map((height, index) => (
            <span
              key={index}
              className="w-1.5 rounded-full motion-safe:animate-pulse"
              style={{
                height: `${height}%`,
                backgroundColor: EQUALIZER_COLORS[index % EQUALIZER_COLORS.length],
                animationDelay: `${(index % 7) * 150}ms`,
                animationDuration: "1.8s",
              }}
            />
          ))}
        </div>

        <div className="hidden w-full gap-3 pt-4 sm:grid sm:grid-cols-3">
          {landingValueProps.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-border/60 bg-background/75 px-4 py-3 text-sm text-muted-foreground shadow-[0_8px_24px_rgba(15,23,42,0.04)] backdrop-blur"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
