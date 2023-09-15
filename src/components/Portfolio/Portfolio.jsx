import React, { useContext, useState } from "react";
import "./Portfolio.css";
import { themeContext } from "../../Context";
import adejuc from "../../img/adejuc.jpg";
import batismo from "../../img/batismo.jpg";
import entreIrmas from "../../img/entreIrmas.jpg";
import infantil from "../../img/infantil.jpg";
import rosa from "../../img/rosa.jpg";
import senhoras from "../../img/senhoras.jpg";
import louvor from "../../img/louvor.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

SwiperCore.use([Pagination, Autoplay]);

const Portfolio = () => {
  const slides = [
    louvor,
    adejuc,
    batismo,
    entreIrmas,
    infantil,
    rosa,
    senhoras,
    // Adicione mais imagens conforme necessário
  ];

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (image, index) => {
    setIsExpanded(true);
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const handleNextImage = () => {
    const nextIndex = (currentIndex + 1) % slides.length;
    setSelectedImage(slides[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const handlePrevImage = () => {
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    setSelectedImage(slides[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  const handleCloseImage = () => {
    setIsExpanded(false);
    setSelectedImage(null);
  };

  return (
    <div className="hero-carousel-container" id="portfolio">
      <div className="t-heading">
        <span>Alguns de nossos </span>
        <span>Momentos... </span>
      </div>
      <br />
      <div className="hero-carousel" style={{ height: "300px" }}>
        <Swiper
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
          className="swiper-container"
          style={{ width: "70%", maxWidth: "600px", marginBottom: "250px" }}
          spaceBetween={10}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div className="slide">
                <img
                  src={slide}
                  alt={`Slide ${index}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    cursor: "pointer",
                  }}
                  onClick={() => handleImageClick(slide, index)}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {isExpanded && (
        <div className="image-modal-overlay">
          <div className="image-modal">
            <button onClick={handlePrevImage} className="prev-button">
              {"<"}
            </button>
            <img
              src={selectedImage}
              alt="Expanded Image"
              className="expanded-image"
            />
            <button onClick={handleNextImage} className="next-button">
              {">"}
            </button>
            <button onClick={handleCloseImage} className="close-button">
              {/* Incorporar o ícone SVG vermelho e maior aqui */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40" /* Ajuste o tamanho conforme necessário */
                height="40" /* Ajuste o tamanho conforme necessário */
                viewBox="0 0 24 24"
                fill="#ff0000" /* Define a cor vermelha */
              >
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
