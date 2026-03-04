import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
export function Footer() {
  return (
    <footer id="contact" className="bg-navy-dark text-gray-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Contact */}
          <div>
            <a
              href="#home"
              className="text-2xl font-bold text-white tracking-tight flex items-center gap-2 mb-6">

              <span className="text-forest-light">Galaxy</span> Fence
            </a>
            <p className="text-gray-400 mb-6">
              Metro Detroit's trusted fence installation experts since 1986.
              Quality materials, professional installation.
            </p>
            <div className="space-y-4">
              <a
                href="tel:8006941342"
                className="flex items-center hover:text-white transition-colors">

                <Phone className="h-5 w-5 mr-3 text-forest-light" />
                (800) 694-1342
              </a>
              <a
                href="tel:8102412900"
                className="flex items-center hover:text-white transition-colors">

                <Phone className="h-5 w-5 mr-3 text-forest-light" />
                (810) 241-2900
              </a>
              <a
                href="mailto:bfenceman@aol.com"
                className="flex items-center hover:text-white transition-colors">

                <Mail className="h-5 w-5 mr-3 text-forest-light" />
                bfenceman@aol.com
              </a>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-forest-light shrink-0 mt-1" />
                <span>
                  Plymouth, MI
                  <br />
                  Serving Metro Detroit
                </span>
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="hover:text-white transition-colors">

                  Our Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  The Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors">

                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors">

                  Vinyl Fence
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors">

                  Wood Fence
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors">

                  Aluminum Fence
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors">

                  Chain Link Fence
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors">

                  Commercial Fence
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors">

                  Fence Repairs
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Articles & Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Brochures
                </a>
              </li>
              <li>
                <a
                  href="#financing"
                  className="hover:text-white transition-colors">

                  Financing Options
                </a>
              </li>
              <li>
                <a
                  href="#financing"
                  className="hover:text-white transition-colors">

                  Special Discounts
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Galaxy Fence Services. All rights
            reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">
              Merchant Policies
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Legal Notice
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>);

}