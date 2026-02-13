import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { CaseStudiesSection } from '@/components/sections/CaseStudiesSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { Footer } from '@/components/Footer';
import { LanguageProvider } from '@/components/LanguageProvider';
import { SiteBackdrop } from '@/components/SiteBackdrop';
import { HeaderBackdrop } from '@/components/HeaderBackdrop';

export default function Home() {
  return (
      <LanguageProvider>
        <div className="min-h-screen text-white antialiased relative overflow-hidden">
          {/* ✅ Same blue tone for ALL the page */}
          <SiteBackdrop />

          {/* ✅ Header image background */}
          <div className="relative">
            <HeaderBackdrop />
            <Navbar />
          </div>

          <main className="pt-24 relative">
            <Hero />
            <ServicesSection />
            <WhyChooseUsSection />
            <AboutSection />
            <CaseStudiesSection />
            <TestimonialsSection />
          </main>

          <Footer />
        </div>
      </LanguageProvider>
  );
}
