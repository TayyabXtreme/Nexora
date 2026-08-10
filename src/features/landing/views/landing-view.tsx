import { LandingHeader } from "@/features/landing/components/landing-header";
import { HeroSection } from "@/features/landing/components/hero-section";
import { CapabilitiesSection } from "@/features/landing/components/capabilities-section";
import { WorkflowSection } from "@/features/landing/components/workflow-section";
import { FeaturesSection } from "@/features/landing/components/features-section";
import { ExperienceSection } from "@/features/landing/components/experience-section";
import { CtaSection } from "@/features/landing/components/cta-section";
import { LandingFooter } from "@/features/landing/components/landing-footer";

export function LandingView() {
  return (
    <div className="relative flex min-h-svh flex-1 flex-col bg-background">
      <LandingHeader />
      <main className="flex-1">
        <HeroSection />
        <CapabilitiesSection />
        <WorkflowSection />
        <FeaturesSection />
        <ExperienceSection />
        <CtaSection />
      </main>
      <LandingFooter />
    </div>
  );
}
