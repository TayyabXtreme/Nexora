import Image from "next/image";
import Link from "next/link";
import { Show } from "@clerk/nextjs";

import { landingNavLinks } from "@/features/landing/data/landing-content";
import {
  GetStartedButton,
  GoToDashboardButton,
  SignInButton,
} from "@/features/landing/components/cta-buttons";

export function LandingHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-xl supports-backdrop-filter:bg-background/65">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 rounded-lg outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
          aria-label="Nexora home"
        >
          <Image
            src="/logo.svg"
            alt=""
            width={26}
            height={26}
            className="rounded-sm"
            priority
          />
          <span className="text-lg font-semibold tracking-tighter text-foreground">
            Nexora
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {landingNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-1.5 text-[13px] font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
          <Show when="signed-out">
            <SignInButton />
            <GetStartedButton size="sm" />
          </Show>
          <Show when="signed-in">
            <GoToDashboardButton size="sm" />
          </Show>
        </div>
      </div>
    </header>
  );
}
