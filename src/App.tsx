import React, { useState } from 'react';
import { PromoBanner } from './components/PromoBanner';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PortfolioPreview } from './components/PortfolioPreview';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Services } from './components/Services';
import { Reviews } from './components/Reviews';
import { CTABanner } from './components/CTABanner';
import { ServiceArea } from './components/ServiceArea';
import { Discounts } from './components/Discounts';
import { About } from './components/About';
import { Awards } from './components/Awards';
import { Footer } from './components/Footer';
import { FloatingCTA } from './components/FloatingCTA';
import { QuoteModal } from './components/QuoteModal';
export function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const handleOpenModal = () => setIsQuoteModalOpen(true);
  const handleCloseModal = () => setIsQuoteModalOpen(false);
  return (
    <div className="min-h-screen flex flex-col w-full bg-warm selection:bg-forest selection:text-white">
      <PromoBanner />
      <Header onOpenQuoteModal={handleOpenModal} />

      <main className="flex-grow">
        <Hero onOpenQuoteModal={handleOpenModal} />
        <PortfolioPreview />
        <WhyChooseUs />
        <Services onOpenQuoteModal={handleOpenModal} />
        <Reviews />
        <CTABanner onOpenQuoteModal={handleOpenModal} />
        <ServiceArea />
        <Discounts onOpenQuoteModal={handleOpenModal} />
        <About />
        <Awards />
      </main>

      <Footer />

      <FloatingCTA onOpenQuoteModal={handleOpenModal} />
      <QuoteModal isOpen={isQuoteModalOpen} onClose={handleCloseModal} />
    </div>);

}