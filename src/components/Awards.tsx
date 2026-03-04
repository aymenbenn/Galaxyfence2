import React from 'react';
import { motion } from 'framer-motion';
export function Awards() {
  const awards = [
  'Best of Northville 2020',
  'Best of Livonia',
  'Home Advisor Approved',
  "Angie's List Super Service",
  'AFA Member',
  'Michigan Chapter AFA',
  'BBB Accredited',
  'Next Door Favorite',
  'Porch Professional',
  'Yelp Highly Rated'];

  return (
    <section className="py-12 bg-navy border-t border-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-400 text-sm font-bold tracking-widest uppercase mb-8">
          Awards & Memberships
        </p>

        {/* Horizontal scrolling container for mobile, wrapped for desktop */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {awards.map((award, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              scale: 0.9
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: index * 0.05
            }}
            className="bg-navy-light border border-gray-700 text-gray-300 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap hover:border-gold hover:text-gold transition-colors cursor-default">

              {award}
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}