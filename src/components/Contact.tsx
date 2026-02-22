import { Send, MapPin, MessageSquare, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#2B7BBF] to-[#1E5A8F]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-white/90">
              Have questions or feedback? We'd love to hear from you!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card bg-white shadow-2xl">
              <div className="card-body p-8">
                <h3 className="card-title text-2xl mb-6 text-gray-800">Send Us a Message</h3>
                <form className="space-y-5">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold text-gray-700">Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="input w-full bg-gray-50 border-2 border-gray-200 focus:bg-white focus:border-[#2B7BBF] focus:outline-none transition-all text-gray-800 placeholder:text-gray-400"
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold text-gray-700">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      className="input w-full bg-gray-50 border-2 border-gray-200 focus:bg-white focus:border-[#2B7BBF] focus:outline-none transition-all text-gray-800 placeholder:text-gray-400"
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold text-gray-700">Phone Number</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="(555) 123-4567"
                      className="input w-full bg-gray-50 border-2 border-gray-200 focus:bg-white focus:border-[#2B7BBF] focus:outline-none transition-all text-gray-800 placeholder:text-gray-400"
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold text-gray-700">Message</span>
                    </label>
                    <textarea
                      placeholder="Your message..."
                      className="textarea h-32 w-full bg-gray-50 border-2 border-gray-200 focus:bg-white focus:border-[#2B7BBF] focus:outline-none transition-all text-gray-800 placeholder:text-gray-400 resize-none"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn bg-[#2B7BBF] hover:bg-[#1E5A8F] text-white border-0 w-full text-lg h-12 shadow-md hover:shadow-lg transition-all"
                  >
                    <Send size={20} />
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            <div className="space-y-6">
              <div className="card bg-white/90 backdrop-blur-md text-gray-800 border-2 border-white/40 shadow-xl hover:shadow-2xl transition-shadow">
                <div className="card-body p-4 sm:p-6">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="bg-[#2B7BBF] text-white p-2 sm:p-3 rounded-xl flex-shrink-0 shadow-md">
                      <MapPin size={24} className="sm:w-7 sm:h-7" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg sm:text-xl mb-2 text-gray-800">Visit Our Location</h4>
                      <p className="text-gray-700 font-medium text-sm sm:text-base">4621 Rosemead Blvd</p>
                      <p className="text-gray-700 font-medium text-sm sm:text-base">Pico Rivera, CA 90660</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card bg-white/90 backdrop-blur-md text-gray-800 border-2 border-white/40 shadow-xl hover:shadow-2xl transition-shadow">
                <div className="card-body p-4 sm:p-6">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="bg-[#2B7BBF] text-white p-2 sm:p-3 rounded-xl flex-shrink-0 shadow-md">
                      <Phone size={24} className="sm:w-7 sm:h-7" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg sm:text-xl mb-2 text-gray-800">Call Us</h4>
                      <a href="tel:5624540101" className="text-[#2B7BBF] text-xl sm:text-2xl font-bold hover:underline block">
                        (562) 454-0101
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card bg-white/90 backdrop-blur-md text-gray-800 border-2 border-white/40 shadow-xl hover:shadow-2xl transition-shadow">
                <div className="card-body p-4 sm:p-6">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="bg-[#2B7BBF] text-white p-2 sm:p-3 rounded-xl flex-shrink-0 shadow-md">
                      <MessageSquare size={24} className="sm:w-7 sm:h-7" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg sm:text-xl mb-2 text-gray-800">Operating Hours</h4>
                      <p className="text-gray-700 font-semibold text-base sm:text-lg">6:00 AM - 10:00 PM</p>
                      <p className="text-gray-700 font-medium text-sm sm:text-base">7 Days a Week</p>
                      <p className="text-xs sm:text-sm text-gray-600 mt-2">
                        Last wash at 8:30 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card bg-gradient-to-br from-white to-blue-50 shadow-xl border-2 border-blue-200 hover:shadow-2xl transition-shadow">
                <div className="card-body p-4 sm:p-6">
                  <h4 className="font-bold text-lg sm:text-xl mb-3 text-gray-800">Pro Tips</h4>
                  <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                    <li className="flex items-start">
                      <span className="text-[#2B7BBF] mr-2 text-base sm:text-lg font-bold flex-shrink-0">•</span>
                      <span className="text-gray-700">Keep your card in a safe place - it's like cash!</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#2B7BBF] mr-2 text-base sm:text-lg font-bold flex-shrink-0">•</span>
                      <span className="text-gray-700">Reload your card before it runs out to avoid interruptions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#2B7BBF] mr-2 text-base sm:text-lg font-bold flex-shrink-0">•</span>
                      <span className="text-gray-700">Check machine availability during off-peak hours for faster service</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
