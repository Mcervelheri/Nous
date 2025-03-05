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
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-2">
        {professionalsData.map((professional, index) => (
          <Professional key={index} {...professional} />
        ))}
      </div>
    </div>
  );
};

export default ProfessionalsList;
