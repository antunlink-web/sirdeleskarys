import { Header } from '@/components/landing/Header';
import { HeroSection } from '@/components/landing/HeroSection';
import { AboutCHDSection } from '@/components/landing/AboutCHDSection';
import { ProblemSection } from '@/components/landing/ProblemSection';
import { SupportGapSection } from '@/components/landing/SupportGapSection';
import { SolutionSection } from '@/components/landing/SolutionSection';
rt { ContactSection } from '@/components/landing/ContactSection';
import { Footer } from '@/components/landing/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutCHDSection />
        <ProblemSection />
        <SupportGapSection />
        <SolutionSection />
        <PartnershipSection />
        <DonationSection />
        <ContactSection />Footer />
    </div>
  );
};

export default Index;
