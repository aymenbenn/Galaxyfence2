import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
export function Reviews() {
  const reviews = [
  {
    text: 'Best fence company in Detroit. Fast and professional. The crew was respectful of our property and cleaned up perfectly.',
    author: 'Mike',
    location: 'Livonia'
  },
  {
    text: 'Excellent installation and fair price. They helped us choose the perfect vinyl fence for our backyard pool area.',
    author: 'Sarah',
    location: 'Canton'
  },
  {
    text: 'Galaxy Fence transformed our backyard. Highly recommend! The quality of the wood and the craftsmanship is outstanding.',
    author: 'James',
    location: 'Northville'
  }];

  return (
    <section className="py-20 bg-navy relative overflow-hidden">
      {/* Subtle background texture/pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Customers Say
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, index) =>
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
            className="bg-navy-light rounded-xl p-8 border border-gray-800 relative">

              <div className="flex text-gold mb-6">
                {[...Array(5)].map((_, i) =>
              <Star key={i} className="h-5 w-5 fill-current" />
              )}
              </div>
              <p className="text-gray-300 text-lg italic mb-6 leading-relaxed">
                "{review.text}"
              </p>
              <div className="mt-auto">
                <p className="text-white font-bold">{review.author}</p>
                <p className="text-gray-400 text-sm">{review.location}, MI</p>
              </div>
            </motion.div>
          )}
        </div>

        <div className="text-center">
          <button className="bg-transparent border-2 border-gray-600 hover:border-white text-white px-8 py-3 rounded-md font-bold transition-colors">
            READ MORE REVIEWS
          </button>
        </div>
      </div>
    </section>);

}