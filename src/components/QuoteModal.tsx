import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 2000);
    }, 1000);
  };
  return (
    <AnimatePresence>
      {isOpen &&
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{
            opacity: 0
          }}
          onClick={onClose}
          className="absolute inset-0 bg-navy/80 backdrop-blur-sm"
          aria-hidden="true" />


          <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
            y: 20
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            scale: 0.95,
            y: 20
          }}
          className="relative w-full max-w-lg bg-white rounded-xl shadow-2xl overflow-hidden"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title">

            <div className="bg-navy p-6 flex items-center justify-between">
              <h2 id="modal-title" className="text-xl font-bold text-white">
                Get Your Free Quote
              </h2>
              <button
              onClick={onClose}
              className="text-gray-300 hover:text-white transition-colors p-1"
              aria-label="Close modal">

                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="p-6">
              {isSuccess ?
            <div className="text-center py-8">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                    <svg
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">

                      <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7" />

                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-charcoal mb-2">
                    Request Received!
                  </h3>
                  <p className="text-gray-600">
                    We'll be in touch shortly to schedule your free estimate.
                  </p>
                </div> :

            <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1">

                        Full Name *
                      </label>
                      <input
                    required
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-forest focus:border-forest outline-none transition-colors"
                    placeholder="John Doe" />

                    </div>
                    <div>
                      <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1">

                        Phone Number *
                      </label>
                      <input
                    required
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-forest focus:border-forest outline-none transition-colors"
                    placeholder="(555) 123-4567" />

                    </div>
                  </div>

                  <div>
                    <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1">

                      Email Address
                    </label>
                    <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-forest focus:border-forest outline-none transition-colors"
                  placeholder="john@example.com" />

                  </div>

                  <div>
                    <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700 mb-1">

                      Property Address *
                    </label>
                    <input
                  required
                  type="text"
                  id="address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-forest focus:border-forest outline-none transition-colors"
                  placeholder="123 Main St, Plymouth, MI" />

                  </div>

                  <div>
                    <label
                  htmlFor="fenceType"
                  className="block text-sm font-medium text-gray-700 mb-1">

                      Fence Type
                    </label>
                    <select
                  id="fenceType"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-forest focus:border-forest outline-none transition-colors bg-white">

                      <option value="">Select an option...</option>
                      <option value="vinyl">Vinyl Fence</option>
                      <option value="wood">Wood Fence</option>
                      <option value="aluminum">Aluminum Fence</option>
                      <option value="chainlink">Chain Link Fence</option>
                      <option value="commercial">Commercial Fence</option>
                      <option value="repair">Fence Repair</option>
                      <option value="unsure">Not Sure Yet</option>
                    </select>
                  </div>

                  <div>
                    <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1">

                      Additional Details
                    </label>
                    <textarea
                  id="message"
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-forest focus:border-forest outline-none transition-colors resize-none"
                  placeholder="Tell us about your project...">
                </textarea>
                  </div>

                  <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-forest hover:bg-forest-hover text-white font-bold py-3 px-4 rounded-md transition-colors flex items-center justify-center disabled:opacity-70">

                    {isSubmitting ? 'Sending...' : 'Get Free Quote'}
                  </button>
                  <p className="text-xs text-center text-gray-500 mt-4">
                    By submitting this form, you agree to be contacted by Galaxy
                    Fence Services.
                  </p>
                </form>
            }
            </div>
          </motion.div>
        </div>
      }
    </AnimatePresence>);

}