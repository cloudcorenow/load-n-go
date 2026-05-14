import { Shirt, Wind, Droplet, Sparkle, Monitor, Coins, FoldHorizontal } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Shirt,
      title: 'State-of-the-Art Touchscreen Washers',
      sizes: ['2 Loads', '4 Loads', '6 Loads', '8 Loads'],
      description: 'Modern washers with intuitive touchscreen controls. Multiple sizes to handle any load, from everyday laundry to bulky comforters.'
    },
    {
      icon: Wind,
      title: 'High-Efficiency Dryers',
      sizes: ['39 Units', '30 lbs Capacity'],
      description: '39 powerful 30-pound capacity dryers that get your laundry dry quickly while being gentle on fabrics.'
    },
    {
      icon: Coins,
      title: 'Flexible Payment Options',
      sizes: ['Card', 'Coin'],
      description: 'Pay your way with our convenient reloadable card system or traditional coin payment.'
    },
    {
      icon: Droplet,
      title: 'Detergent Available',
      sizes: ['Available for Purchase'],
      description: 'Forgot your detergent? We have quality detergent and fabric softener available.'
    },
    {
      icon: Monitor,
      title: 'Touchscreen Technology',
      sizes: ['Easy to Use'],
      description: 'Modern touchscreen interfaces on all washers make selecting cycles simple and straightforward.'
    },
    {
      icon: Sparkle,
      title: 'Clean Facility',
      sizes: ['Always Maintained'],
      description: 'Our facility is regularly cleaned and maintained to ensure a pleasant experience.'
    }
  ];

  const comingSoonService = {
    icon: FoldHorizontal,
    title: 'Wash & Fold Service',
    sizes: ['Coming Soon'],
    description: 'Drop off your laundry and let us handle the washing, drying, and folding. Perfect for busy schedules!'
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Modern equipment and amenities to make your laundry day easier.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="card bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="card-body">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-[#2B7BBF] to-[#1E5A8F] p-4 rounded-lg flex-shrink-0 shadow-md">
                    <service.icon size={32} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="card-title text-xl mb-2 text-gray-900">{service.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {service.sizes.map((size, idx) => (
                        <span key={idx} className="badge bg-blue-100 text-gray-800 border-gray-300 font-medium">
                          {size}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-700 text-sm">{service.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="card bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-amber-500 text-white px-4 sm:px-6 py-1 sm:py-2 text-xs sm:text-sm font-bold transform rotate-12 translate-x-6 sm:translate-x-8 -translate-y-3 sm:-translate-y-4">
              COMING SOON
            </div>
            <div className="card-body p-4 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start sm:space-x-4 space-y-4 sm:space-y-0">
                <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-3 sm:p-4 rounded-lg flex-shrink-0 shadow-md">
                  <comingSoonService.icon size={28} className="text-white sm:w-8 sm:h-8" />
                </div>
                <div className="flex-1">
                  <h3 className="card-title text-xl sm:text-2xl mb-2 text-gray-900">{comingSoonService.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {comingSoonService.sizes.map((size, idx) => (
                      <span key={idx} className="badge bg-amber-200 text-amber-900 border-amber-300 font-semibold">
                        {size}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base">{comingSoonService.description}</p>
                  <p className="text-xs sm:text-sm text-gray-600 mt-3 italic">Stay tuned for more details on pricing and availability!</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="stats shadow bg-gradient-to-br from-blue-50 to-white border border-blue-100">
            <div className="stat">
              <div className="stat-title text-gray-700 font-semibold">Washer Sizes</div>
              <div className="stat-value text-[#2B7BBF]">4</div>
              <div className="stat-desc text-gray-600 font-medium">2, 4, 6, and 8 loads</div>
            </div>
          </div>

          <div className="stats shadow bg-gradient-to-br from-blue-50 to-white border border-blue-100">
            <div className="stat">
              <div className="stat-title text-gray-700 font-semibold">Dryers</div>
              <div className="stat-value text-[#2B7BBF]">39</div>
              <div className="stat-desc text-gray-600 font-medium">30 lb capacity units</div>
            </div>
          </div>

          <div className="stats shadow bg-gradient-to-br from-blue-50 to-white border border-blue-100">
            <div className="stat">
              <div className="stat-title text-gray-700 font-semibold">Operating Hours</div>
              <div className="stat-value text-[#2B7BBF]">6AM-10PM</div>
              <div className="stat-desc text-gray-600 font-medium">Last wash at 8:30 PM</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
