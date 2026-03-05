import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// Import your local images from src/assets/portfolio
import vinylPrivacy from '../assets/portfolio/vinyl-privacy.JPG';
import aluminum from '../assets/portfolio/aluminum.JPG';
import wood from '../assets/portfolio/wood.JPG';
import chainLink from '../assets/portfolio/chain-link.JPG';
import commercial from '../assets/portfolio/commercial.JPG';
import beforeAfter from '../assets/portfolio/before-after.JPG';

export function PortfolioPreview() {
  const portfolioItems = [
    {
      title: 'Vinyl Privacy',
      image: vinylPrivacy,
      alt: 'White vinyl privacy fence installation',
    },
    {
      title: 'Aluminum',
      image: aluminum,
      alt: 'Black aluminum ornamental fence',
    },
    {
      title: 'Wood',
      image: wood,
      alt: 'Custom wood privacy fence',
    },
    {
      title: 'Chain Link',
      image: chainLink,
      alt: 'Residential chain link fence',
    },
    {
      title: 'Commercial',
      image: commercial,
      alt: 'Commercial security fencing',
    },
    {
      title: 'Before & After',
      image: beforeAfter,
      alt: 'Fence replacement before and after',
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Recent Fence Installations Near You
            </h2>
            <p className="text-lg text-gray-600">
              Browse our gallery of recent projects across Metro Detroit. We
              take pride in every post we set and every panel we install.
            </p>
          </motion.div>

          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="#contact"
            className="inline-flex items-center text-forest font-bold hover:text-forest-hover transition-colors group"
          >
            VIEW FULL PORTFOLIO
            <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl shadow-md cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-80 transition-opacity duration-300" />

              <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                <div className="w-12 h-1 bg-gold rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}