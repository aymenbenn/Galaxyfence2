import React, { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
interface HeaderProps {
  onOpenQuoteModal: () => void;
}
export function Header({ onOpenQuoteModal }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
  {
    name: 'Home',
    href: '#home'
  },
  {
    name: 'Services',
    href: '#services'
  },
  {
    name: 'Portfolio',
    href: '#portfolio'
  },
  {
    name: 'About',
    href: '#about'
  },
  {
    name: 'Financing',
    href: '#financing'
  },
  {
    name: 'Contact',
    href: '#contact'
  }];

  return (
    <header
      className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-navy/95 backdrop-blur-md shadow-lg py-3' : 'bg-navy py-5'}`}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a
              href="#home"
              className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">

              <span className="text-forest-light">Galaxy</span> Fence
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
            <a
              key={link.name}
              href={link.href}
              className="text-gray-200 hover:text-white text-sm font-medium transition-colors">

                {link.name}
              </a>
            )}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="tel:8006941342"
              className="flex items-center text-white font-medium hover:text-gold transition-colors">

              <Phone className="h-4 w-4 mr-2" />
              (800) 694-1342
            </a>
            <button
              onClick={onOpenQuoteModal}
              className="bg-forest hover:bg-forest-hover text-white px-6 py-2.5 rounded-md font-bold transition-colors shadow-lg shadow-forest/20">

              GET FREE QUOTE
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-200 hover:text-white p-2"
              aria-label="Toggle menu">

              {isMobileMenuOpen ?
              <X className="h-6 w-6" /> :

              <Menu className="h-6 w-6" />
              }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen &&
        <motion.div
          initial={{
            opacity: 0,
            height: 0
          }}
          animate={{
            opacity: 1,
            height: 'auto'
          }}
          exit={{
            opacity: 0,
            height: 0
          }}
          className="md:hidden bg-navy-light border-t border-gray-800 overflow-hidden">

            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) =>
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-3 text-base font-medium text-gray-200 hover:text-white hover:bg-navy rounded-md">

                  {link.name}
                </a>
            )}
              <div className="mt-6 pt-6 border-t border-gray-800 flex flex-col gap-4 px-3">
                <a
                href="tel:8006941342"
                className="flex items-center justify-center text-white font-medium bg-navy py-3 rounded-md">

                  <Phone className="h-5 w-5 mr-2" />
                  (800) 694-1342
                </a>
                <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full bg-forest hover:bg-forest-hover text-white px-6 py-3 rounded-md font-bold transition-colors text-center">

                  GET FREE QUOTE
                </button>
              </div>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}