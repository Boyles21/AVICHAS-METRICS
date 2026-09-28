import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AdvantageSection } from './components/AdvantageSection';
import { ProductsSection, ProductItem, productsData } from './components/ProductsSection';
import { IndustriesSection, IndustryItem, industriesData } from './components/IndustriesSection';
import { BuiltOnTrustSection } from './components/BuiltOnTrustSection';
import { AssessmentBanner } from './components/AssessmentBanner';
import { Footer } from './components/Footer';
import { AssessmentModal } from './components/AssessmentModal';
import { ContactModal } from './components/ContactModal';
import { VideoModal } from './components/VideoModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { IndustryDetailModal } from './components/IndustryDetailModal';
import { LegalModal } from './components/LegalModal';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryItem | null>(null);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | 'security' | null>(null);

  const handleExplore = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigateSection = (sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F7F4] text-slate-900 selection:bg-[#C9975B]/30 flex flex-col font-sans">
      {/* Fixed Navigation Header */}
      <Navbar
        onOpenContact={() => setIsContactOpen(true)}
        onNavigateSection={handleNavigateSection}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* Hero Section with Live Dashboard and Twilight Mountains */}
        <Hero
          onExplore={handleExplore}
          onTalkToAvichas={() => setIsContactOpen(true)}
          onWatchVideo={() => setIsVideoOpen(true)}
        />

        {/* Section 2: The Avichas Advantage (5 Pillars) */}
        <AdvantageSection />

        {/* Section 3: Our Products (4 Enterprise Solutions) */}
        <ProductsSection
          onSelectProduct={(prod) => setSelectedProduct(prod)}
          onViewAllProducts={() => setSelectedProduct(productsData[0])}
        />

        {/* Section 4: Industries (Financial Services, Healthcare, Manufacturing, Professional Services) */}
        <IndustriesSection
          onSelectIndustry={(ind) => setSelectedIndustry(ind)}
          onExploreIndustries={() => setSelectedIndustry(industriesData[0])}
        />

        {/* Section 5: Built On Trust (Security, Privacy & Governance) */}
        <BuiltOnTrustSection />

        {/* Section 6: Ready to Move Forward? (Organizational Alignment Profile Banner) */}
        <AssessmentBanner
          onStartAssessment={() => setIsAssessmentOpen(true)}
        />
      </main>

      {/* Site Footer */}
      <Footer
        onOpenContact={() => setIsContactOpen(true)}
        onOpenLegal={(type) => setLegalModalType(type)}
      />

      {/* Interactive Overlays & Modals */}
      <AssessmentModal
        isOpen={isAssessmentOpen}
        onClose={() => setIsAssessmentOpen(false)}
        onBookBriefing={() => {
          setIsAssessmentOpen(false);
          setIsContactOpen(true);
        }}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        onOpenContact={() => {
          setIsVideoOpen(false);
          setIsContactOpen(true);
        }}
      />

      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onContact={() => {
          setSelectedProduct(null);
          setIsContactOpen(true);
        }}
      />

      <IndustryDetailModal
        industry={selectedIndustry}
        onClose={() => setSelectedIndustry(null)}
        onContact={() => {
          setSelectedIndustry(null);
          setIsContactOpen(true);
        }}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
