import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Siren, Heart } from 'lucide-react';
interface DiscountsProps {
  onOpenQuoteModal: () => void;
}
export function Discounts({ onOpenQuoteModal }: DiscountsProps) {
  const discounts = [
  {
    icon: Shield,
    title: 'Military Personnel',
    description:
    'Active duty, veterans, and reservists. Thank you for your service.'
  },
  {
    icon: Siren,
    title: 'First Responders',
    description: 'Police officers, firefighters, EMTs, and paramedics.'
  },
  {
    icon: Heart,
    title: 'Senior Citizens',
    description: 'Special rates for individuals aged 65 and older.'
  }];

  return (
    <section id="financing" className="py-20 bg-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true,
            margin: '-100px'
          }}
          className="text-center max-w-3xl mx-auto mb-16">

          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Special Discounts
          </h2>
          <p className="text-lg text-gray-600">
            At Galaxy Fence Services, we deeply appreciate those who serve our
            community and the wisdom of our seniors. We proudly offer exclusive
            discounts to these valued members.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {discounts.map((discount, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true,
              margin: '-50px'
            }}
            transition={{
              delay: index * 0.1
            }}
            className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm text-center">

              <div className="mx-auto w-16 h-16 bg-forest/10 rounded-full flex items-center justify-center mb-6">
                <discount.icon className="h-8 w-8 text-forest" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">
                {discount.title}
              </h3>
              <p className="text-gray-600 mb-6">{discount.description}</p>
              <button
              onClick={onOpenQuoteModal}
              className="text-forest font-bold hover:text-forest-hover transition-colors underline underline-offset-4">

                Claim Discount
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}