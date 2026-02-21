import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { CaseStudiesSection } from '@/components/sections/CaseStudiesSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { TeamExperienceSection } from '@/components/sections/TeamExperienceSection';
import { Footer } from '@/components/Footer';
import { LanguageProvider } from '@/components/LanguageProvider';
import { SiteBackdrop } from '@/components/SiteBackdrop';
import { HeaderBackdrop } from '@/components/HeaderBackdrop';

export default function Home() {
  return (
      <LanguageProvider>
        <div className="min-h-screen text-white antialiased relative overflow-hidden">
          <SiteBackdrop />

          <div className="relative">
            <HeaderBackdrop />
            <Navbar />
          </div>

          <main className="pt-24 relative">
            <Hero />
            <StatsSection />
            <ServicesSection />
            <WhyChooseUsSection />
            <TeamExperienceSection />
            <CaseStudiesSection />
            <TestimonialsSection />
            <AboutSection />
          </main>

          <Footer />
        </div>
      </LanguageProvider>
  );
}
