const CTASection = () => {
  return (
    <section className="relative h-[300px] w-full">
      {/* Background Image */}
      <img
        src="/hero.png" // replace with your image path
        alt="CTA Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-350 w-full mx-auto flex items-center justify-center relative">
          {/* Center Text */}
          <h2 className="text-white text-lg md:text-2xl font-semibold text-center">
            Let{"'"}s Evolve your Business
          </h2>

          {/* Button (Right Side) */}
          <button className="absolute right-0 border border-white text-white px-5 py-2 rounded-full hover:bg-white hover:text-black transition text-sm md:text-base whitespace-nowrap">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
