import { CreditCard, Smartphone, Repeat, Loader } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: CreditCard,
      number: '01',
      title: 'Get Your Card',
      description: 'Purchase a Load N-GO card at our Value Add Center. It\'s reusable and reloadable.'
    },
    {
      icon: Smartphone,
      number: '02',
      title: 'Load Value',
      description: 'Add funds to your card at the Value Add Center using cash or card payment.'
    },
    {
      icon: Loader,
      number: '03',
      title: 'Start Your Wash',
      description: 'Place your card on the card reader of any washer or dryer to start your cycle.'
    },
    {
      icon: Repeat,
      number: '04',
      title: 'Reload Anytime',
      description: 'When your balance runs low, simply reload your card and keep going!'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Getting started is easy. Follow these simple steps for a seamless laundry experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="card bg-white shadow-lg hover:shadow-xl transition-shadow h-full border border-gray-100">
                <div className="card-body">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-gradient-to-br from-[#2B7BBF] to-[#1e5a8f] p-3 rounded-lg shadow-md">
                      <step.icon size={28} className="text-white" />
                    </div>
                    <span className="text-5xl font-bold text-gray-100">{step.number}</span>
                  </div>
                  <h3 className="card-title text-xl mb-2 text-gray-900">{step.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{step.description}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-0.5 bg-[#2B7BBF]/30"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white p-6 sm:p-8 rounded-2xl shadow-xl">
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Special Bonus</h3>
                <p className="text-white/90 text-base sm:text-lg mb-1">Load $20 and get <span className="font-bold text-2xl sm:text-3xl">$3 FREE</span></p>
                <p className="text-white/80 text-xs sm:text-sm">Automatically added when you load $20 or more through the card system!</p>
              </div>
              <div className="text-3xl sm:text-5xl flex-shrink-0">🎁</div>
            </div>
          </div>

          <div className="bg-[#2B7BBF] text-white p-6 sm:p-8 rounded-2xl shadow-xl">
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Important Reminder</h3>
                <p className="text-white/90 text-sm sm:text-base">Load N-GO is not responsible for lost or stolen cards.</p>
                <p className="text-white/90 font-semibold text-sm sm:text-base">Treat this card as cash - do not throw away!</p>
              </div>
              <div className="text-3xl sm:text-4xl flex-shrink-0">💳</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
