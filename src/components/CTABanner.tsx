import React from 'react';
import { motion } from 'framer-motion';
interface CTABannerProps {
  onOpenQuoteModal: () => void;
}
export function CTABanner({ onOpenQuoteModal }: CTABannerProps) {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1600&q=80"
          alt="Fence installation background"
          className="w-full h-full object-cover object-center" />

        <div className="absolute inset-0 bg-navy/85 mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95
          }}
          whileInView={{
            opacity: 1,
            scale: 1
          }}
          viewport={{
            once: true,
            margin: '-100px'
          }}
          transition={{
            duration: 0.5
          }}>

          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            Ready to Install Your Fence?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Get your free, no-obligation estimate today. Our experts are ready
            to help you choose the perfect fence for your property.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={onOpenQuoteModal}
              className="bg-forest hover:bg-forest-hover text-white px-8 py-4 rounded-md font-bold text-lg transition-colors shadow-lg shadow-forest/20">

              GET FREE QUOTE
            </button>
            <a
              href="tel:8006941342"
              className="bg-white hover:bg-gray-100 text-navy px-8 py-4 rounded-md font-bold text-lg transition-colors flex items-center justify-center">

              CALL NOW
            </a>
          </div>
        </motion.div>
      </div>
    </section>);

}