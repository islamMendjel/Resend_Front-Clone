import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import TrustLogos from "@/components/sections/TrustLogos";
import IntegrateSection from "@/components/sections/IntegrateSection";
import DeveloperExperienceBento from "@/components/sections/DeveloperExperienceBento";
import DelightfulEditorSection from "@/components/sections/DelightfulEditorSection";
import GoBeyondEditingSection from "@/components/sections/GoBeyondEditingSection";
import ReactEmailSection from "@/components/sections/ReactEmailSection";
import ReachHumansGrid from "@/components/sections/ReachHumansGrid";
import FeaturedQuoteSection from "@/components/sections/FeaturedQuoteSection";
import ControlMetricsSection from "@/components/sections/ControlMetricsSection";
import TestimonialsMarquee from "@/components/sections/TestimonialsMarquee";
import FooterCTA from "@/components/sections/FooterCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-[#f0f0f0] overflow-x-clip">
      {/* 01: Navbar */}
      <Header />

      {/* 02: Hero & 3D Rubik's Cube */}
      <Hero />

      {/* 03: Trust Logo Grid */}
      <TrustLogos />

      {/* 04: Integrate This Morning / Tonight */}
      <IntegrateSection />

      {/* 05: Developer Experience Bento */}
      <DeveloperExperienceBento />

      {/* 06: Delightful Editor */}
      <DelightfulEditorSection />

      {/* 07: Go Beyond Editing */}
      <GoBeyondEditingSection />

      {/* 08: React Email */}
      <ReactEmailSection />

      {/* 09: Reach Humans, Not Spam Folders */}
      <ReachHumansGrid />

      {/* Featured Quote: Guillermo Rauch / Vercel */}
      <FeaturedQuoteSection />

      {/* 10: Everything in Your Control */}
      <ControlMetricsSection />

      {/* 11: Beyond Expectations Marquee */}
      <TestimonialsMarquee />

      {/* 12: Footer CTA */}
      <FooterCTA />

      {/* 13: Footer Links & Socials */}
      <Footer />
    </main>
  );
}
