import { Facebook, Instagram, MapPin, Clock, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <img src="https://imagedelivery.net/s0JEtwqnLquT1GUYjPcg5Q/7d71ea89-e6fc-4199-ebf7-f8e9df469a00/public" alt="Load N-GO Logo" className="h-16 w-auto mb-4" />
            <p className="text-gray-400 text-sm">
              Modern laundry solutions with our convenient reloadable card system.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-white transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('how-it-works')} className="text-gray-400 hover:text-white transition-colors">
                  How It Works
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('faq')} className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Location & Hours</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin size={20} className="text-[#2B7BBF] flex-shrink-0 mt-1" />
                <div className="text-gray-400 text-sm">
                  <p>4621 Rosemead Blvd</p>
                  <p>Pico Rivera, CA 90660</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Clock size={20} className="text-[#2B7BBF] flex-shrink-0 mt-1" />
                <div className="text-gray-400 text-sm">
                  <p>6:00 AM - 10:00 PM</p>
                  <p>Last wash at 8:30 PM</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Phone size={20} className="text-[#2B7BBF] flex-shrink-0 mt-1" />
                <div className="text-gray-400 text-sm">
                  <a href="tel:5624540101" className="hover:text-white transition-colors">
                    (562) 454-0101
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-lg hover:bg-[#2B7BBF] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-lg hover:bg-[#2B7BBF] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Follow us for updates and laundry tips!
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
              &copy; {currentYear} Load N-GO. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <button className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors">
                Privacy Policy
              </button>
              <button className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
