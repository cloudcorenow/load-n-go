import { MapPin, Clock, Phone, Navigation } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Visit Us Today
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're conveniently located in Pico Rivera and ready to serve you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <div className="card bg-white shadow-lg">
              <div className="card-body">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#2B7BBF] p-3 rounded-lg flex-shrink-0">
                    <MapPin size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Address</h3>
                    <p className="text-gray-700 text-lg">4621 Rosemead Blvd</p>
                    <p className="text-gray-700 text-lg">Pico Rivera, CA 90660</p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=4621+Rosemead+Blvd+Pico+Rivera+CA+90660"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm bg-[#2B7BBF] hover:bg-[#1E5A8F] text-white border-0 mt-4"
                    >
                      <Navigation size={16} />
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="card bg-white shadow-lg">
              <div className="card-body">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#2B7BBF] p-3 rounded-lg flex-shrink-0">
                    <Clock size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Hours</h3>
                    <div className="space-y-2">
                      <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                        <span className="text-gray-700">Monday - Sunday</span>
                        <span className="font-semibold text-[#2B7BBF]">6:00 AM - 10:00 PM</span>
                      </div>
                      <div className="divider my-2"></div>
                      <p className="text-sm text-gray-600">
                        Last wash at 8:30 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card bg-white shadow-lg">
              <div className="card-body">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#2B7BBF] p-3 rounded-lg flex-shrink-0">
                    <Phone size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Contact</h3>
                    <a href="tel:5624540101" className="text-[#2B7BBF] text-xl font-semibold hover:underline mb-2 block">
                      (562) 454-0101
                    </a>
                    <p className="text-sm text-gray-600">
                      Call us with any questions about our services or card system.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-white shadow-lg overflow-hidden h-full">
            <div className="relative pb-[75%] sm:pb-[100%] md:pb-[120%]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.8577359682824!2d-118.07691662343876!3d33.99196447316069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2d0a8d8a8a8a8%3A0x0!2s4621%20Rosemead%20Blvd%2C%20Pico%20Rivera%2C%20CA%2090660!5e0!3m2!1sen!2sus!4v1234567890123"
                className="absolute top-0 left-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Load N-GO Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
