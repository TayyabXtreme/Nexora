"use client";

import { useUser } from "@clerk/nextjs";
import { Headphones, Sparkles, ThumbsUp } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function DashboardHeader() {
  const { isLoaded, user } = useUser();
  const displayName = isLoaded
    ? user?.fullName ?? user?.firstName ?? "there"
    : "...";
  const initials = (displayName
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("") || "N")
    .toUpperCase();

  return (
    <div className="relative overflow-hidden rounded-[24px] border border-border/60 bg-linear-to-br from-background via-background to-muted/35 p-4 shadow-[0_20px_60px_rgba(15,23,42,0.06)] sm:p-5 lg:p-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.9),transparent_34%),radial-gradient(circle_at_left,rgba(120,119,198,0.08),transparent_28%)]" />
      <div className="relative flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl space-y-3 sm:space-y-4">
          <div className="hidden items-center gap-2 rounded-full border border-border/70 bg-background/80 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground shadow-sm backdrop-blur sm:inline-flex">
            <Sparkles className="size-3.5" />
            Dashboard overview
          </div>

          <div className="flex items-start gap-3 sm:gap-4">
            <Avatar className="size-11 ring-4 ring-background shadow-[0_12px_30px_rgba(15,23,42,0.12)] sm:size-12 lg:size-14">
              <AvatarImage src={user?.imageUrl} alt={displayName} />
              <AvatarFallback className="bg-linear-to-br from-slate-950 to-slate-700 text-sm font-semibold text-white">
                {initials}
              </AvatarFallback>
            </Avatar>

            <div className="min-w-0 flex-1 space-y-1.5 sm:space-y-2">
              <p className="text-xs font-medium text-muted-foreground sm:text-sm">
                Good to see you back
              </p>
              <h1 className="text-2xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                {displayName}
              </h1>
              <p className="hidden max-w-xl text-sm leading-6 text-muted-foreground sm:block sm:text-base">
                Keep your voice projects moving with quick access to feedback,
                support, and the latest workspace tools.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 sm:gap-3 lg:flex-col lg:items-stretch">
          <Button
            variant="outline"
            size="icon"
            nativeButton={false}
            render={<a href="mailto:business@tayyabxtrem.com" />}
            className={cn(
              "h-11 w-11 rounded-full border-border/70 bg-background/80 p-0 shadow-sm backdrop-blur transition-transform hover:-translate-y-0.5 sm:w-auto sm:px-4 sm:gap-2",
            )}
            aria-label="Send feedback"
          >
            <ThumbsUp />
            <span className="hidden sm:inline">Feedback</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            nativeButton={false}
            render={<a href="mailto:business@tayyabxtrem.com" />}
            className={cn(
              "h-11 w-11 rounded-full border-border/70 bg-background/80 p-0 shadow-sm backdrop-blur transition-transform hover:-translate-y-0.5 sm:w-auto sm:px-4 sm:gap-2",
            )}
            aria-label="Get help"
          >
            <Headphones />
            <span className="hidden sm:inline">Need help?</span>
          </Button>
        </div>
      </div>

      <div className="relative mt-4 hidden gap-3 sm:grid sm:grid-cols-2 lg:grid-cols-3">
        {[
          "Fast access to your workspace",
          "Built for focused voice creation",
          "Support is only a click away",
        ].map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-border/60 bg-background/75 px-4 py-3 text-sm text-muted-foreground shadow-[0_8px_24px_rgba(15,23,42,0.04)]"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
