import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ServicesProps {
  onOpenQuoteModal: () => void;
}

// Import your local images from src/assets
import vinylFenceImg from '../assets/v.jpg';
import woodFenceImg from '../assets/w.jpg';
import aluminumFenceImg from '../assets/a.jpg';
import chainLinkFenceImg from '../assets/l.jpg';
import commercialFenceImg from '../assets/c.jpg';
import fenceRepairsImg from '../assets/f.jpg';

export function Services({ onOpenQuoteModal }: ServicesProps) {
  const services = [
    {
      title: 'Vinyl Fence',
      description:
        'Low-maintenance, durable, and beautiful privacy or picket options that last a lifetime.',
      image: vinylFenceImg,
    },
    {
      title: 'Wood Fence',
      description:
        'Classic, natural beauty with custom designs including privacy, shadowbox, and picket styles.',
      image: woodFenceImg,
    },
    {
      title: 'Aluminum Fence',
      description:
        'Elegant, rust-free ornamental fencing perfect for pool enclosures and property lines.',
      image: aluminumFenceImg,
    },
    {
      title: 'Chain Link Fence',
      description:
        'Economical, secure, and durable fencing available in traditional galvanized or color-coated.',
      image: chainLinkFenceImg,
    },
    {
      title: 'Commercial Fence',
      description:
        'High-security and heavy-duty fencing solutions for businesses and industrial properties.',
      image: commercialFenceImg,
    },
    {
      title: 'Fence Repairs',
      description:
        'Expert repair services for storm damage, leaning posts, broken panels, and gate adjustments.',
      image: fenceRepairsImg,
    },
  ];

  return (
    <section id="services" className="py-20 bg-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Fence Installation Services
          </h2>
          <p className="text-lg text-gray-600">
            We offer a complete range of premium fencing materials and styles to
            perfectly match your home's architecture and your family's needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 flex flex-col h-full"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-navy mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                <button
                  onClick={onOpenQuoteModal}
                  className="inline-flex items-center text-forest font-bold hover:text-forest-hover transition-colors group mt-auto"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}