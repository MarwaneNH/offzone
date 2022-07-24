import React from "react";
import Workitem from "./Workitem";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Data
// import { works } from "../asset/data/works";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";

export default function App({array}) {
  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={0}
        pagination={{
          type: "progressbar",
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {array.map((project) => (
          <SwiperSlide key={project.id}>
            <Workitem project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
