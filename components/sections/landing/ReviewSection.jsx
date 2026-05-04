"use client";

import Slider from "react-slick";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

// CUSTOM ARROWS
function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full cursor-pointer hover:bg-gray-100"
    >
      <ChevronRight className="w-5 h-5 text-gray-700" />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full cursor-pointer hover:bg-gray-100"
    >
      <ChevronLeft className="w-5 h-5 text-gray-700" />
    </div>
  );
}

export default function ReviewsSection() {
  // DUMMY DATA (10 USERS)
  const reviews = Array.from({ length: 10 }).map((_, i) => ({
    name: `User ${i + 1}`,
    review:
      "Working with this team was an excellent experience. Their professionalism and attention to detail exceeded expectations.",
    image: `https://i.pravatar.cc/150?img=${i + 10}`,
  }));

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // 5 seconds
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="w-full py-16 bg-[#f5f6f7]">
      <div className="max-w-350 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Customers Reviews
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            Check out the reviews from our satisfied customers
          </p>
        </div>

        {/* SLIDER */}
        <div className="relative">
          <Slider {...settings}>
            {reviews.map((item, index) => (
              <div key={index} className="px-3">
                <div className="bg-white rounded-2xl shadow-md p-6 text-center h-full">
                  {/* STARS */}
                  <div className="flex justify-center gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>

                  {/* REVIEW TEXT */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.review}
                  </p>

                  {/* USER */}
                  <div className="mt-6 flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-orange-400">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={50}
                        height={50}
                        className="object-cover"
                      />
                    </div>
                    <p className="text-xs mt-2 font-medium text-gray-800">
                      {item.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
