import React from "react";

const VicidialSection2 = () => {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12">
        {/* Top Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Discover Our <span className="italic">Vicidial</span>
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Vicidial is the world’s leading open-source call center platform,
              with over 14,000 installations spanning more than 100 countries.
              At Havex, we transform this powerful tool into the most affordable
              and complete call center solution for businesses across South
              Africa and beyond, tailored to your unique needs.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/hero.png" // replace with your image path
              alt="Call Center"
              className="rounded-2xl w-full max-w-md object-cover shadow-md"
            />
          </div>
        </div>

        {/* Pricing Card */}
        <div className="mt-14 flex justify-center">
          <div className="bg-gradient-to-b from-blue-200 to-blue-400 rounded-2xl shadow-lg px-10 py-8 text-center w-full max-w-xs border border-blue-300">
            <p className="text-sm text-gray-700 mb-1">Vicidial</p>

            <h3 className="text-xl font-semibold mb-2">Standard</h3>

            <div className="flex items-end justify-center gap-1 mb-4">
              <span className="text-lg font-medium">R</span>
              <span className="text-4xl font-bold">345</span>
              <span className="text-sm text-gray-700 mb-1">/per user</span>
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-6 py-2 rounded-full transition">
              ORDER NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VicidialSection2;
