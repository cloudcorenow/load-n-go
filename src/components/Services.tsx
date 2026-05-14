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

          {/* Wash & Fold Service Card */}
          <div className="card bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-amber-500 text-white px-5 py-1 text-xs font-bold transform rotate-12 translate-x-5 -translate-y-2">
              COMING SOON
            </div>
            <div className="card-body">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-4 rounded-lg flex-shrink-0 shadow-md">
                  <FoldHorizontal size={32} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="card-title text-xl mb-2 text-gray-900">Wash &amp; Fold Service</h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="badge bg-amber-200 text-amber-900 border-amber-300 font-semibold text-sm px-3 py-1">
                      $1.25 / lb
                    </span>
                    <span className="badge bg-amber-100 text-amber-800 border-amber-200 font-medium">
                      10 lb minimum
                    </span>
                  </div>
                  <p className="text-gray-700 text-sm mb-3">
                    Drop off your laundry and let us handle the washing, drying, and folding. Perfect for busy schedules!
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0"></span>Wash, dry &amp; fold included</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0"></span>Ready same day or next day</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0"></span>Neatly packaged for pickup</li>
                  </ul>
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
