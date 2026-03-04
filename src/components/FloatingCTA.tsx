import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
interface FloatingCTAProps {
  onOpenQuoteModal: () => void;
}
export function FloatingCTA({ onOpenQuoteModal }: FloatingCTAProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      transition={{
        delay: 1,
        duration: 0.5
      }}
      className="fixed bottom-6 right-6 z-40 md:hidden">

      <button
        onClick={onOpenQuoteModal}
        className="bg-forest text-white rounded-full p-4 shadow-xl shadow-forest/30 flex items-center justify-center hover:bg-forest-hover transition-colors relative group"
        aria-label="Get Free Quote">

        <motion.div
          animate={{
            scale: [1, 1.1, 1]
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            repeatDelay: 3
          }}
          className="absolute inset-0 rounded-full border-2 border-forest opacity-50" />

        <MessageSquare className="h-6 w-6" />
      </button>
    </motion.div>);

}