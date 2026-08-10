import type { Metadata } from "next";

import { LandingView } from "@/features/landing/views/landing-view";

export const metadata: Metadata = {
  title: "AI Voice Studio — Lifelike Text to Speech",
  description:
    "Nexora turns plain text into expressive, production-ready voiceovers. Clone voices, direct performances with precision controls, and ship studio-grade audio from one focused workspace.",
  keywords: [
    "AI voice generator",
    "text to speech studio",
    "voice cloning",
    "expressive TTS",
    "voiceover generator",
  ],
  openGraph: {
    title: "Nexora — AI Voice Studio",
    description:
      "Turn plain text into expressive, production-ready voiceovers with directed AI voices.",
  },
};

export default function LandingPage() {
  return <LandingView />;
}
