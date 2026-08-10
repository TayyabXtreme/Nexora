import Image from "next/image";
import Link from "next/link";
import { Headphones } from "lucide-react";

import {
  landingNavLinks,
  SUPPORT_EMAIL,
} from "@/features/landing/data/landing-content";

export function LandingFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex max-w-xs flex-col gap-2">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.svg"
                alt=""
                width={22}
                height={22}
                className="rounded-sm"
              />
              <span className="text-base font-semibold tracking-tighter text-foreground">
                Nexora
              </span>
            </div>
            <p className="text-xs leading-5 text-muted-foreground">
              A polished voice generation workspace for creating, refining, and
              managing text-to-speech projects.
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="flex flex-wrap items-center gap-x-5 gap-y-2"
          >
            {landingNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <Headphones className="size-3.5" />
              Support
            </a>
          </nav>
        </div>

        <div className="flex flex-col gap-2 border-t border-dashed border-border pt-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] text-muted-foreground">
            © {new Date().getFullYear()} Nexora. All rights reserved.
          </p>
          <p className="font-mono text-[11px] text-muted-foreground">
            v0.1 · AI voice studio
          </p>
        </div>
      </div>
    </footer>
  );
}
