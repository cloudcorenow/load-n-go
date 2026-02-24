import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const images = [
    {
      url: 'https://imagedelivery.net/s0JEtwqnLquT1GUYjPcg5Q/53cbdb89-ca5d-4355-f801-4b29e1c5c800/public',
      alt: 'Load N-GO Laundromat facility',
      title: 'Multiple Machines'
    },
    {
      url: 'https://imagedelivery.net/s0JEtwqnLquT1GUYjPcg5Q/19fa0568-ab7e-4114-d07d-6c2f3bc63800/public',
      alt: 'Commercial washers and dryers',
      title: 'High-Efficiency Equipment'
    },
    {
      url: 'https://imagedelivery.net/s0JEtwqnLquT1GUYjPcg5Q/c27de66e-4195-4176-3afe-1d569b926d00/public',
      alt: 'Laundry machines interior view',
      title: 'Our Modern Facility'
    },
    {
      url: 'https://imagedelivery.net/s0JEtwqnLquT1GUYjPcg5Q/b92d83a9-fa75-4776-9962-ebc60c512300/public',
      alt: 'Spacious laundromat interior',
      title: 'Clean & Spacious'
    },
    {
      url: 'https://imagedelivery.net/s0JEtwqnLquT1GUYjPcg5Q/c7c90217-8ab0-440c-8d71-6da48d131c00/public',
      alt: 'Row of washers and dryers',
      title: 'Plenty of Options'
    },
    {
      url: 'https://imagedelivery.net/s0JEtwqnLquT1GUYjPcg5Q/52ea6492-e615-4d58-3aec-32c86a771600/public',
      alt: 'Laundry facility equipment',
      title: 'Professional Grade Machines'
    },
    {
      url: 'https://imagedelivery.net/s0JEtwqnLquT1GUYjPcg5Q/385916c7-7adf-46fd-d266-abae21b40a00/public',
      alt: 'Modern laundromat space',
      title: 'Comfortable Environment'
    },
    {
      url: 'https://imagedelivery.net/s0JEtwqnLquT1GUYjPcg5Q/cca98090-9ae0-419a-615f-55819af69400/public',
      alt: 'Washing machines lineup',
      title: 'Ready When You Are'
    },
    {
      url: 'https://imagedelivery.net/s0JEtwqnLquT1GUYjPcg5Q/19cac844-3c5a-42eb-4070-dd636e43a500/public',
      alt: 'Laundromat interior setup',
      title: 'Well-Maintained Facility'
    },
    {
      url: 'https://imagedelivery.net/s0JEtwqnLquT1GUYjPcg5Q/13861a23-9c2a-415e-5ed6-e929a9e79100/public',
      alt: 'Dryers and washers section',
      title: 'Complete Laundry Solutions'
    },
    {
      url: 'https://imagedelivery.net/s0JEtwqnLquT1GUYjPcg5Q/3ba0f7a8-095c-4690-7436-90b2f7589800/public',
      alt: 'Laundry equipment area',
      title: 'State-of-the-Art Equipment'
    },
    {
      url: 'https://imagedelivery.net/s0JEtwqnLquT1GUYjPcg5Q/214482c1-d792-4b99-4441-827bb215f600/public',
      alt: 'Full facility view',
      title: 'Your Laundry Destination'
    }
  ];

  const goToPrevious = () => {
    setSelectedImageIndex((prev) =>
      prev === null ? null : prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setSelectedImageIndex((prev) =>
      prev === null ? null : prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      goToPrevious();
    } else if (e.key === 'ArrowRight') {
      goToNext();
    } else if (e.key === 'Escape') {
      setSelectedImageIndex(null);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Facility
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Take a look at our modern, clean facility equipped with the latest laundry technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer aspect-[4/3]"
              onClick={() => setSelectedImageIndex(index)}
            >
              <img
                src={image.url}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-semibold">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImageIndex(null)}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            onClick={() => setSelectedImageIndex(null)}
            aria-label="Close gallery"
          >
            <X size={32} />
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/50 hover:bg-black/70 rounded-full p-3 z-10"
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/50 hover:bg-black/70 rounded-full p-3 z-10"
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>

          <div className="relative max-w-full max-h-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[selectedImageIndex].url}
              alt={images[selectedImageIndex].alt}
              className="max-w-full max-h-[90vh] object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="text-white text-xl font-semibold text-center">
                {images[selectedImageIndex].title}
              </h3>
              <p className="text-white/70 text-center text-sm mt-1">
                {selectedImageIndex + 1} / {images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
