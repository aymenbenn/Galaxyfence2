import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
// Import your local CEO image
import ceoImage from '../assets/ceo.png';

export function About() {
  const points = [
    'Family owned and operated since 1986',
    'Thousands of fences installed in Metro Detroit',
    'Active member of the American Fence Association',
    'Two-year written warranty on all installations',
  ];

  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="w-full lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gold/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-forest/20 rounded-full blur-2xl"></div>

              {/* Updated image to local CEO image */}
              <img
                src={ceoImage}
                alt="Galaxy Fence CEO"
                className="relative rounded-2xl shadow-2xl object-cover aspect-[4/3] w-full"
              />

              <div className="absolute -bottom-6 -right-6 bg-navy text-white p-6 rounded-xl shadow-xl hidden md:block">
                <p className="text-4xl font-extrabold text-gold mb-1">38+</p>
                <p className="font-medium">Years of Excellence</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Extensive Experience and Expertise
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With over 38 years of installation experience since 1986, Galaxy
              Fence Services has a proven track record of delivering
              high-quality fencing solutions. We are committed to providing
              exceptional service and ensuring your complete satisfaction.
            </p>

            <ul className="space-y-4 mb-8">
              {points.map((point, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-forest shrink-0 mr-3" />
                  <span className="text-gray-700 font-medium">{point}</span>
                </li>
              ))}
            </ul>

            <button className="bg-navy hover:bg-navy-light text-white px-8 py-3 rounded-md font-bold transition-colors">
              LEARN MORE ABOUT US
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}