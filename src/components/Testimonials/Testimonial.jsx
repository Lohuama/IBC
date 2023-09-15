import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation'; // Importe os estilos de navegação do Swiper
import SwiperCore, { Navigation } from 'swiper';
import { Pagination } from "swiper";
import "swiper/css/pagination";

SwiperCore.use([Navigation]);

const Testimonial = () => {
  const clients = [
    {
      img: 'Nossa Missão',
      review:
        "Propagar o Evangelho Genuíno de Cristo a todas as Pessoas, Cultivando a Comunhão e conduzir as vidas à verdadeira adoração a Deus.",
    },
    {
      img: 'Nossa Visão',
      review:
        "Ser uma igreja Cristocêntrica, Fiel as Sagradas Escrituras, que transmita o amor de Deus através de suas ações e comunhão dos seus membros, que tenha responsabilidade com o cuidado social, emocional e espiritual de sua comunidade, e que seja comprometida com a obra missionária.",
    },
    {
      img: 'Nosso Propósito',
      review:
        "É Adorar a Deus, Edificando a igreja por meio da Palavra Sagrada, levando as Pessoas a uma vida de Obediência, Amor e Serviço a Deus e ao Próximo, Anunciando o Evangelho de Cristo Jesus a todas as Pessoas.",
    }
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Entenda quem </span>
        <span>Somos... </span>
        {/* <span>from me...</span>  */}
        <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div style={{color: '#fca61f'}} className="swiper-button-prev"></div>
              <div className="testimonial">
                {/* <img src={client.img} alt="" /> */}
                <span style={{ fontSize: client.img === 'Nossa Visão' ? '20px' : '20px', fontWeight: 'bold', color: '#fca61f' }}>
                  {client.img}
                </span>
                <span style={{ fontSize: '15px' }}>{client.review}</span>
                <div style={{color: '#fca61f'}} className="swiper-button-next"></div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
