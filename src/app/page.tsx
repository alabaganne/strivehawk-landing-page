import { Header } from "@/components/header";
import { CTA } from "@/components/sections/cta";
import { CustomerStories } from "@/components/sections/customer-stories";
import { Expertises } from "@/components/sections/expertises";
import { Footer } from "@/components/sections/footer";
import { Frameworks } from "@/components/sections/frameworks";
import { HeroSection } from "@/components/sections/hero-section";
import { Partnerships } from "@/components/sections/partnerships";
import { StartBuilding } from "@/components/sections/start-building-section";
import { Testimonial } from "@/components/sections/testimonial";
import { VideoShowcase } from "@/components/sections/video-showcase";
import { WhyStrivehawk } from "@/components/sections/why-strivehawk";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <WhyStrivehawk />
      <Expertises />
      <Partnerships />
      <CustomerStories />
      <StartBuilding />
      <Frameworks />
      <VideoShowcase />
      <Testimonial />
      <CTA />
      <Footer />
    </>
  );
}
