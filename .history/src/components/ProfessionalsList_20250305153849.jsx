import React from "react";
import Professional from "./Professional";
import professionalsData from "./ProfessionalsData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProfessionalsList = () => {
  return (
    <div className="px-2">
      <div className="hidden lg:grid lg:grid-cols-3 gap-8">
        {professionalsData.map((professional, index) => (
          <Professional key={index} {...professional} />
        ))}
      </div>
      <div className="lg:hidden mx-8">
        <div className="relative w-full flex justify-center items-center">
          <button className="custom-prev absolute left-2 z-10 bg-[#5e4031] text-white w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-[#3c2a20]">
            &#10094;
          </button>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: true }}
            navigation={{ prevEl: ".custom-prev", nextEl: ".custom-next" }}
            className="w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%]"
          >
            {professionalsData.map((professional, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <Professional {...professional} />
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="custom-next absolute right-2 z-10 bg-[#5e4031] text-white w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-[#3c2a20]">
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalsList;
