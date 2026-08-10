import {
  AudioLines,
  Download,
  FolderClock,
  PenLine,
  SlidersHorizontal,
  Volume2,
  type LucideIcon,
} from "lucide-react";

export interface LandingNavLink {
  label: string;
  href: string;
}

export interface LandingCapability {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface LandingWorkflowStep {
  step: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export const landingNavLinks: LandingNavLink[] = [
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Workflow", href: "/#workflow" },
  { label: "Features", href: "/#features" },
  { label: "Use cases", href: "/#use-cases" },
];

export const landingCapabilities: LandingCapability[] = [
  {
    icon: AudioLines,
    title: "Lifelike text to speech",
    description:
      "Chatterbox-powered synthesis turns raw scripts into natural, studio-grade WAV audio in seconds.",
  },
  {
    icon: Volume2,
    title: "Voice cloning",
    description:
      "Create a custom voice from your own recordings and reuse it across every project and workspace.",
  },
  {
    icon: SlidersHorizontal,
    title: "Direction, not guesswork",
    description:
      "Shape each take with Creativity, Voice Variety, Expression Range, and Natural Flow before you hit generate.",
  },
  {
    icon: FolderClock,
    title: "Everything organized",
    description:
      "Voices and generations stay scoped to your workspace, so your team can pick up right where it left off.",
  },
];

export const landingWorkflow: LandingWorkflowStep[] = [
  {
    step: "01",
    icon: PenLine,
    title: "Write your script",
    description:
      "Paste ad copy, a movie scene, a podcast intro — any text, any tone, any length.",
  },
  {
    step: "02",
    icon: SlidersHorizontal,
    title: "Choose a voice, then direct it",
    description:
      "Pick from category-tuned voices or your own clone, and shape the delivery with four expressive controls.",
  },
  {
    step: "03",
    icon: Download,
    title: "Generate and ship",
    description:
      "Preview the take instantly, keep every version in your history, and export production-ready audio.",
  },
];

export const landingValueProps: string[] = [
  "Studio-grade WAV output",
  "Four expressive direction controls",
  "Your voices, organized per workspace",
];

export const SUPPORT_EMAIL = "business@tayyabxtrem.com";
