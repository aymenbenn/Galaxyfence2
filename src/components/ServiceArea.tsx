import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
export function ServiceArea() {
  const cities = [
  'Livonia',
  'Plymouth',
  'Canton',
  'Northville',
  'Novi',
  'Ann Arbor',
  'Dearborn',
  'Detroit',
  'Farmington Hills',
  'West Bloomfield',
  'Troy',
  'Royal Oak'];

  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{
              opacity: 0,
              x: -30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true,
              margin: '-100px'
            }}
            className="md:w-1/3 text-center md:text-left">

            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-forest/10 text-forest mb-6">
              <MapPin className="h-8 w-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Proudly Serving Metro Detroit
            </h2>
            <p className="text-gray-600 text-lg">
              We install high-quality fences across the entire Metro Detroit
              area. Don't see your city? Call us to check availability!
            </p>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true,
              margin: '-100px'
            }}
            className="md:w-2/3 w-full">

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {cities.map((city, index) =>
              <div
                key={index}
                className="bg-warm py-3 px-4 rounded-lg border border-gray-100 text-center font-medium text-navy hover:bg-forest hover:text-white hover:border-forest transition-colors cursor-default">

                  {city}
                </div>
              )}
              <div className="bg-warm py-3 px-4 rounded-lg border border-gray-100 text-center font-medium text-gray-500 italic">
                and more...
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}