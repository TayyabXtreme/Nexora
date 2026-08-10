import { Show } from "@clerk/nextjs";
import { Headphones, Sparkles } from "lucide-react";

import {
  GetStartedButton,
  GoToDashboardButton,
} from "@/features/landing/components/cta-buttons";
import { Reveal } from "@/features/landing/components/reveal";
import { SUPPORT_EMAIL } from "@/features/landing/data/landing-content";

export function CtaSection() {
  return (
    <section className="relative">
      <div className="mx-auto w-full max-w-6xl px-4 pt-16 pb-16 sm:px-6 sm:pt-24 sm:pb-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-[24px] bg-linear-to-br from-slate-950 to-slate-700 px-6 py-14 text-center text-white shadow-[0_20px_60px_rgba(15,23,42,0.25)] sm:px-10 sm:py-20">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(45,212,191,0.22),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(129,140,248,0.22),transparent_45%)]" />

            <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6 text-balance">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-white/70">
                <Sparkles className="size-3.5" />
                Ready when you are
              </div>

              <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
                Ready to sound like you mean it?
              </h2>

              <p className="max-w-xl text-sm leading-6 text-white/70 sm:text-base">
                Open the studio, pick a voice, and hear your first take in under
                a minute. Your next project already sounds better.
              </p>

              <div className="flex flex-col items-center gap-3 pt-1 sm:flex-row">
                <Show when="signed-out">
                  <GetStartedButton
                    size="lg"
                    className="bg-white text-slate-950 shadow-none hover:bg-white/90"
                  />
                </Show>
                <Show when="signed-in">
                  <GoToDashboardButton
                    size="lg"
                    className="bg-white text-slate-950 shadow-none hover:bg-white/90"
                  />
                </Show>
              </div>

              <p className="flex items-center gap-1.5 text-xs text-white/60">
                <Headphones className="size-3.5" />
                Questions first?
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="font-medium text-white/80 underline underline-offset-4 transition-colors hover:text-white"
                >
                  Talk to us
                </a>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
