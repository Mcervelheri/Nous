import React from "react";
import Professional from "./Professional";
import professionalsData from "./ProfessionalsData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

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
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          {professionalsData.map((professional, index) => (
            <SwiperSlide key={index}>
              <Professional {...professional} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProfessionalsList;
