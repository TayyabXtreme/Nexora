"use client";

import Image from "next/image";
import { Headphones, MailQuestionIcon, ThumbsUp } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

export function PageHeader({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "sticky top-0 z-20 border-b border-border/60 bg-background/85 px-3 py-3 backdrop-blur-xl supports-backdrop-filter:bg-background/65 sm:px-4",
        className
      )}
    >
      <div className="rounded-[24px] border border-border/60 bg-linear-to-br from-background via-background to-muted/40 px-3 py-3 shadow-[0_10px_32px_rgba(15,23,42,0.05)] sm:px-4 sm:py-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex min-w-0 flex-1 items-center gap-3">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl border border-border/60 bg-background shadow-sm">
              <Image
                src="/logo.svg"
                alt="Nexora"
                width={28}
                height={28}
                className="size-7"
                priority={false}
              />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
                Nexora
              </p>
              <h1 className="truncate text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                {title}
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <SidebarTrigger className="size-10 shrink-0 rounded-full border border-border/60 bg-background p-0 shadow-sm" />
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <Button
                    variant="outline"
                    size="icon"
                    className="size-10 aspect-square rounded-full border-border/70 bg-background/80 p-0 shadow-sm transition-transform hover:-translate-y-0.5"
                    aria-label="Open help actions"
                  />
                }
              >
                <MailQuestionIcon />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" sideOffset={8}>
                <DropdownMenuItem
                  onClick={() => {
                    window.location.href = "mailto:business@tayyabxtrem.com";
                  }}
                  className="gap-2"
                >
                  <ThumbsUp />
                  Feedback
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    window.location.href = "mailto:business@tayyabxtrem.com";
                  }}
                  className="gap-2"
                >
                  <Headphones />
                  Need help?
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
}
