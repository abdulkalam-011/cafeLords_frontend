// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Swiper } from "swiper/react";
import "./style.css";

// import required modules
import { Navigation } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import { Link } from "react-router";

export default function Slider() {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper rounded-lg"
      >
        <SwiperSlide>
          <Link to="/menu"></Link>
          <img src="images\about-us\features-bg.png" alt="" width='20%' />
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
