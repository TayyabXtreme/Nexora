"use client";

import Image from "next/image";
import Link from "next/link";
import { SignIn } from "@clerk/nextjs";
import { WavyBackground } from "@/components/ui/wavy-background";

export default function SignInPage() {
  return (
    <WavyBackground
      colors={["#2DD4BF", "#22D3EE", "#38BDF8", "#818CF8", "#22d3ee"]}
      blur={10}
      speed="fast"
      waveOpacity={0.5}
      waveWidth={50}
      waveYOffset={250}
      backgroundFill="#ffffff"
      containerClassName="h-screen flex flex-col"
    >
      {/* Header */}
      <div className="relative z-20 flex items-center justify-between px-6 py-4 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-lg outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
          aria-label="Nexora home"
        >
          <Image
            src="/logo.svg"
            alt="Nexora"
            width={28}
            height={28}
            className="rounded-sm"
            priority
          />
          <span className="text-lg font-semibold tracking-tighter text-foreground">
            Nexora
          </span>
        </Link>
      </div>

      {/* Form Container */}
      <div className="relative z-10 flex flex-1 items-center justify-center px-4">
        <div className="w-full max-w-sm">
          <SignIn
            appearance={{
              elements: {
                rootBox: "mx-auto",
                card: "shadow-lg",
              },
            }}
          />
        </div>
      </div>
    </WavyBackground>
  );
}