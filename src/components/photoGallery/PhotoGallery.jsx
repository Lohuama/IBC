import React from 'react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './PhotoGallery.css';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const PhotoGallery = ({ images }) => {
  return (
    <Swiper
      className="custom-swiper" // Adicione uma classe personalizada aqui
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} alt={`Image ${index}`} className="gallery-image" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PhotoGallery;
