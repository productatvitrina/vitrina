import { FeatureHighlights } from "@/components/feature-highlights";
import { HeroSection } from "@/components/hero-section";
import { JourneySection } from "@/components/journey-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureHighlights />
      <JourneySection />
    </>
  );
}
