"use client";

import { WavyBackground } from "@/components/ui/wavy-background";

export function HeroWave() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden [mask-image:linear-gradient(to_bottom,black_55%,transparent_100%)]">
      <WavyBackground
        colors={["#2DD4BF", "#22D3EE", "#38BDF8", "#818CF8"]}
        backgroundFill="hsl(0 0% 100%)"
        blur={3}
        speed="slow"
        waveOpacity={0.12}
        waveWidth={60}
        waveYOffset={260}
        containerClassName="h-full"
        className="hidden"
      />
    </div>
  );
}
