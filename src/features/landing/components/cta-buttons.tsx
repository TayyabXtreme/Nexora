"use client";

import Link from "next/link";
import { ArrowDown, ArrowRight, LayoutDashboard } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CtaButtonProps {
  className?: string;
  size?: "sm" | "default" | "lg";
}

export function GetStartedButton({ className, size = "default" }: CtaButtonProps) {
  return (
    <Button
      size={size}
      nativeButton={false}
      render={<Link href="/sign-up" />}
      className={cn(
        "rounded-full shadow-[0_12px_30px_rgba(15,23,42,0.12)] transition-transform hover:-translate-y-0.5",
        size === "lg" ? "h-11 px-6" : "px-4",
        className,
      )}
    >
      Start creating
      <ArrowRight />
    </Button>
  );
}

export function SignInButton({ className, size = "default" }: CtaButtonProps) {
  return (
    <Button
      variant="ghost"
      size={size}
      nativeButton={false}
      render={<Link href="/sign-in" />}
      className={cn("rounded-full", className)}
    >
      Sign in
    </Button>
  );
}

export function GoToDashboardButton({ className, size = "default" }: CtaButtonProps) {
  return (
    <Button
      size={size}
      nativeButton={false}
      render={<Link href="/dashboard" />}
      className={cn(
        "rounded-full shadow-[0_12px_30px_rgba(15,23,42,0.12)] transition-transform hover:-translate-y-0.5",
        size === "lg" ? "h-11 px-6" : "px-4",
        className,
      )}
    >
      <LayoutDashboard />
      Go to Dashboard
    </Button>
  );
}

export function HowItWorksButton({ className }: { className?: string }) {
  return (
    <Button
      variant="outline"
      size="lg"
      nativeButton={false}
      render={<Link href="/#workflow" />}
      className={cn(
        "h-11 rounded-full border-border/70 bg-background/80 px-6 backdrop-blur transition-transform hover:-translate-y-0.5",
        className,
      )}
    >
      See how it works
      <ArrowDown />
    </Button>
  );
}
