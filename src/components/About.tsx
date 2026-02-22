import { Shield, Clock, Zap, Music } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Your card is protected and can be easily replaced if lost. Treat it like cash!'
    },
    {
      icon: Clock,
      title: 'Convenient Hours',
      description: 'Open 6 AM to 10 PM daily. Do your laundry on your schedule, every day of the week.'
    },
    {
      icon: Zap,
      title: 'Fast & Efficient',
      description: 'Modern washers and dryers that save you time and get your clothes spotless.'
    },
    {
      icon: Music,
      title: 'Relaxing Atmosphere',
      description: 'Enjoy music while you wait in our clean, well-maintained facility with comfortable seating.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Load N-GO?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We've reimagined the laundromat experience with modern technology and customer-first service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card bg-gradient-to-br from-blue-50 to-white border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="card-body items-center text-center">
                <div className="bg-gradient-to-br from-[#2B7BBF]/20 to-[#5DADE2]/10 p-4 rounded-full mb-4">
                  <feature.icon size={32} className="text-[#2B7BBF]" />
                </div>
                <h3 className="card-title text-xl text-gray-900">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
