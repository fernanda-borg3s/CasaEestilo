import { useState} from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Carousel.css';
import { Pagination } from 'swiper/modules';
import ImagensData from "../../database/slideImg.js";


export default function Carousel() {
  const [imagens, setImagens] = useState(ImagensData);

  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {imagens.map((imagem, index) => (
          <SwiperSlide >
            <img src={imagem.ImgSlide} alt={imagem.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
  