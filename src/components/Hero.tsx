import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-32 pb-20 bg-gradient-to-br from-[#2B7BBF] via-[#3A8DD1] to-[#5DADE2]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Sparkles size={20} />
              <span className="text-sm font-medium">Reusable & Reloadable Laundry Card</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Modern Laundry Made Simple
            </h1>

            <p className="text-xl text-white/90">
              Experience hassle-free laundry with flexible payment options. Use our convenient reloadable card system or traditional coins!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => scrollToSection('location')}
                className="btn btn-lg bg-white text-[#2B7BBF] hover:bg-gray-100 border-0"
              >
                Visit Us Today
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="btn btn-lg btn-outline border-white text-white hover:bg-white hover:text-[#2B7BBF]"
              >
                Learn More
              </button>
            </div>

            <div className="grid grid-cols-2 sm:flex sm:items-center gap-4 sm:gap-8 pt-8">
              <div>
                <div className="text-2xl sm:text-3xl font-bold">6AM-10PM</div>
                <div className="text-xs sm:text-sm text-white/80">Open Daily</div>
              </div>
              <div className="hidden sm:block h-12 w-px bg-white/30"></div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold">Modern</div>
                <div className="text-xs sm:text-sm text-white/80">Equipment</div>
              </div>
              <div className="hidden sm:block h-12 w-px bg-white/30"></div>
              <div className="col-span-2 sm:col-span-1">
                <div className="text-2xl sm:text-3xl font-bold">Card & Coin</div>
                <div className="text-xs sm:text-sm text-white/80">Payment Options</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white p-4 sm:p-8 rounded-2xl shadow-2xl">
              <img
                src="https://imagedelivery.net/s0JEtwqnLquT1GUYjPcg5Q/e53cefa0-0772-44d1-00c7-74824e340600/public"
                alt="Load N-GO Card"
                className="w-full h-auto rounded-lg"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-black text-white p-3 sm:p-6 rounded-xl shadow-xl">
              <div className="text-xs sm:text-sm font-medium mb-1">Location</div>
              <div className="text-[10px] sm:text-xs">4621 Rosemead Blvd</div>
              <div className="text-[10px] sm:text-xs">Pico Rivera, CA 90660</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
