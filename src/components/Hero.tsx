import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Award, Star, CheckCircle } from 'lucide-react'
import heroImage from "../assets/hero1.jpg"
interface HeroProps {
  onOpenQuoteModal: () => void
}

export function Hero({ onOpenQuoteModal }: HeroProps) {
  const trustBadges = [
    { icon: Shield, text: 'Licensed & Insured' },
    { icon: Award, text: '38+ Years Experience' },
    { icon: Star, text: '5-Star Rated' },
    { icon: CheckCircle, text: 'Lifetime Warranty Options' },
  ]

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-[90vh] flex items-center"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
      <img
  src={heroImage}
  alt="Fence installation"
  className="w-full h-full object-cover object-center"
/>
        
        {/* Dark Overlay (adjust opacity if too dark) */}
        <div className="absolute inset-0 bg-navy/20 mix-blend-multiply" />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-navy/20 to-navy/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-forest/20 border border-forest-light/30 text-forest-light text-sm font-bold tracking-wider uppercase mb-6 backdrop-blur-sm">
              Metro Detroit's #1 Choice
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 text-balance">
              Metro Detroit's Trusted Fence Company Since 1986
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl text-balance">
              Professional Fence Installation • Free Estimates • Family Owned & Operated
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <button
                onClick={onOpenQuoteModal}
                className="bg-forest hover:bg-forest-hover text-white px-8 py-4 rounded-md font-bold text-lg transition-colors shadow-lg shadow-forest/20 text-center"
              >
                GET FREE QUOTE
              </button>

              <a
                href="tel:8006941342"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-navy text-white px-8 py-4 rounded-md font-bold text-lg transition-colors text-center flex items-center justify-center"
              >
                CALL (800) 694-1342
              </a>
            </div>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-8 border-t border-white/10"
          >
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="flex-shrink-0 bg-gold/20 p-2 rounded-full">
                  <badge.icon className="h-5 w-5 text-gold" />
                </div>
                <span className="text-sm font-medium text-gray-300 leading-tight">
                  {badge.text}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}