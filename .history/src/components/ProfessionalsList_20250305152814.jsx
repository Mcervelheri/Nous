import React from "react";
import Professional from "./Professional";
import professionalsData from "./ProfessionalsData";

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProfessionalsList = () => {
  return (
    <div className="relative w-full flex justify-center items-center">
      {/* Setas personalizadas FORA do Swiper */}
      <button className="custom-prev absolute left-2 z-10 bg-[#5e4031] text-white w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-[#3c2a20]">
        &#10094; {/* Código do ícone de seta para a esquerda */}
      </button>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={16}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={{ prevEl: ".custom-prev", nextEl: ".custom-next" }}
        className="w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%]"
      >
        {professionalsData.map((professional, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <Professional {...professional} />
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="custom-next absolute right-2 z-10 bg-[#5e4031] text-white w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-[#3c2a20]">
        &#10095; {/* Código do ícone de seta para a direita */}
      </button>
    </div>
  );
};

export default ProfessionalsList;
