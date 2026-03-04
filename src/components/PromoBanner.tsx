import React, { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
export function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <AnimatePresence>
      {isVisible &&
      <motion.div
        initial={{
          height: 0,
          opacity: 0
        }}
        animate={{
          height: 'auto',
          opacity: 1
        }}
        exit={{
          height: 0,
          opacity: 0
        }}
        className="bg-forest text-white relative z-50">

          <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8 flex items-center justify-between">
            <p className="text-sm font-medium text-center flex-1">
              <span className="font-bold text-gold">Spring into savings</span> —
              10% off + priority installation on all services booked now!
            </p>
            <button
            onClick={() => setIsVisible(false)}
            className="p-1 hover:bg-forest-hover rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Dismiss promo banner">

              <X className="h-4 w-4 text-white" />
            </button>
          </div>
        </motion.div>
      }
    </AnimatePresence>);

}