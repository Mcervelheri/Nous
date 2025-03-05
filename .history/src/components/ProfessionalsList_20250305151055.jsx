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
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={16}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: true }}
          className="relative"
        >
          {professionalsData.map((professional, index) => (
            <SwiperSlide key={index}>
              <Professional {...professional} />
            </SwiperSlide>
          ))}
          <div className="swiper-button-prev absolute left-2 bg-white/70 w-10 h-10 flex items-center justify-center rounded-full text-[#5e4031] transition-all duration-300 hover:bg-[#5e4031] hover:text-white"></div>
          <div className="swiper-button-next absolute right-2 bg-white/70 w-10 h-10 flex items-center justify-center rounded-full text-[#5e4031] transition-all duration-300 hover:bg-[#5e4031] hover:text-white"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default ProfessionalsList;
