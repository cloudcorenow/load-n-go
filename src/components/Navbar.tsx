import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="navbar bg-white shadow-md fixed top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center space-x-3"
          >
            <img src="https://imagedelivery.net/s0JEtwqnLquT1GUYjPcg5Q/7d71ea89-e6fc-4199-ebf7-f8e9df469a00/public" alt="Load N-GO Logo" className="h-14 w-auto" />
          </button>

          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-[#2B7BBF] font-medium transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-gray-700 hover:text-[#2B7BBF] font-medium transition-colors">
              How It Works
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-[#2B7BBF] font-medium transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-[#2B7BBF] font-medium transition-colors">
              Gallery
            </button>
            <button onClick={() => scrollToSection('location')} className="text-gray-700 hover:text-[#2B7BBF] font-medium transition-colors">
              Location
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-[#2B7BBF] font-medium transition-colors">
              FAQ
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-[#2B7BBF] font-medium transition-colors">
              Contact
            </button>
          </div>

          <button
            onClick={() => scrollToSection('contact')}
            className="hidden md:block btn bg-[#2B7BBF] hover:bg-[#1E5A8F] text-white border-0"
          >
            Get Started
          </button>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-700 hover:text-[#2B7BBF] font-medium py-2">
              About
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="block w-full text-left text-gray-700 hover:text-[#2B7BBF] font-medium py-2">
              How It Works
            </button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left text-gray-700 hover:text-[#2B7BBF] font-medium py-2">
              Services
            </button>
            <button onClick={() => scrollToSection('gallery')} className="block w-full text-left text-gray-700 hover:text-[#2B7BBF] font-medium py-2">
              Gallery
            </button>
            <button onClick={() => scrollToSection('location')} className="block w-full text-left text-gray-700 hover:text-[#2B7BBF] font-medium py-2">
              Location
            </button>
            <button onClick={() => scrollToSection('faq')} className="block w-full text-left text-gray-700 hover:text-[#2B7BBF] font-medium py-2">
              FAQ
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-gray-700 hover:text-[#2B7BBF] font-medium py-2">
              Contact
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn bg-[#2B7BBF] hover:bg-[#1E5A8F] text-white border-0 w-full"
            >
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
