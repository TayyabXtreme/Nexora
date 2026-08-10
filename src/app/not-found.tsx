"use client";

import Link from "next/link";
import { AudioLines, Headphones, Home } from "lucide-react";

import { Button } from "@/components/ui/button";

const WAVE_BARS = [
  14, 22, 34, 48, 64, 82, 100, 82, 64, 48, 34, 48, 64, 82, 100, 82, 64, 48,
  34, 22, 14,
];

const WAVE_COLORS = ["#2DD4BF", "#22D3EE", "#38BDF8", "#818CF8"];

export default function NotFound() {
  return (
    <div className="relative flex min-h-svh flex-1 flex-col items-center justify-center overflow-hidden bg-background px-4 py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.08),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(129,140,248,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(45,212,191,0.06),transparent_30%)]" />

      <span
        aria-hidden
        className="pointer-events-none absolute select-none font-mono text-[10rem] font-bold leading-none tracking-tight text-foreground/[0.03] sm:text-[16rem] lg:text-[20rem]"
      >
        404
      </span>

      <div className="relative flex w-full max-w-xl flex-col items-center gap-6 text-center text-balance">
        <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/80 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground shadow-sm backdrop-blur">
          <AudioLines className="size-3.5" />
          Error 404 · Signal lost
        </div>

        <div className="flex h-20 items-center justify-center gap-1.5" aria-hidden>
          {WAVE_BARS.map((height, index) => (
            <span
              key={index}
              className="w-1.5 animate-pulse rounded-full"
              style={{
                height: `${height}%`,
                backgroundColor: WAVE_COLORS[index % WAVE_COLORS.length],
                animationDelay: `${(index % 7) * 150}ms`,
                animationDuration: "1.8s",
              }}
            />
          ))}
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
            This page went silent
          </h1>
          <p className="mx-auto max-w-md text-sm leading-6 text-muted-foreground sm:text-base">
            The voice you are chasing is not on this frequency. The link may be
            broken, the track may have been deleted, or it was never recorded.
          </p>
        </div>

        <code className="rounded-md border border-border/60 bg-muted/50 px-2.5 py-1 font-mono text-xs text-muted-foreground">
          ERR_404 :: TRACK_NOT_FOUND
        </code>

        <div className="flex flex-col gap-3 pt-2 sm:flex-row">
          <Button
            size="lg"
            nativeButton={false}
            render={<Link href="/" />}
            className="h-11 rounded-full px-6 shadow-[0_12px_30px_rgba(15,23,42,0.12)] transition-transform hover:-translate-y-0.5"
          >
            <Home />
            Back to dashboard
          </Button>
          <Button
            variant="outline"
            size="lg"
            nativeButton={false}
            render={<Link href="/text-to-speech" />}
            className="h-11 rounded-full border-border/70 bg-background/80 px-6 backdrop-blur transition-transform hover:-translate-y-0.5"
          >
            <AudioLines />
            Open studio
          </Button>
        </div>

        <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Headphones className="size-3.5" />
          Still lost?
          <a
            href="mailto:business@tayyabxtrem.com"
            className="font-medium underline underline-offset-4 transition-colors hover:text-primary"
          >
            Contact support
          </a>
        </p>
      </div>
    </div>
  );
}
