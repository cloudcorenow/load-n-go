function Flyer() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Special Offer</h2>
          <p className="text-gray-600 text-lg">Take a look at our latest promotion</p>
        </div>
        <div className="flex justify-center">
          <div className="max-w-2xl w-full">
            <img
              src="https://imagedelivery.net/s0JEtwqnLquT1GUYjPcg5Q/da2641d5-6063-480d-62b0-226d52171500/public"
              alt="Load N-GO special offer flyer"
              className="w-full h-auto block"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Flyer;
