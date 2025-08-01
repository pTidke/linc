import HeroSection from "@/components/hero-section";
import Features from "@/components/features-1";
import ContentSection from "@/components/content-1";
import CallToAction from "@/components/call-to-action";
import FooterSection from "@/components/footer";
import "@fontsource/poppins/600.css"; // for h1 (weight 600 or 700)
import "@fontsource/inter/400.css";   // for p (regular paragraph)


export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <Features /> */}
      {/* <ContentSection /> */}
      {/* <CallToAction /> */}
      <FooterSection />
    </>
  );
}
