import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import missao from "../../img/missao.png";
import visao from "../../img/visao.png";
import proposito from "../../img/proposito.png";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: missao,
      review:
        "Propagar o Evangelho Genuíno de Cristo a todas as Pessoas, Cultivando a Comunhão e conduzir as vidas à verdadeira adoração a Deus.",
    },
    {
      img: visao,
      review:
        "Ser uma igreja Cristocêntrica, Fiel as Sagradas Escrituras, que transmita o amor de Deus através de suas ações e comunhão dos seus membros, que tenha responsabilidade com o cuidado social, emocional e espiritual de sua comunidade, e que seja comprometida com a obra missionária.",
    },
    {
      img: proposito,
      review:
        "É Adorar a Deus, Edificando a igreja por meio da Palavra Sagrada, levando as Pessoas a uma vida de Obediência, Amor e Serviço a Deus e ao Próximo, Anunciando o Evangelho de Cristo Jesus a todas as Pessoas.",
    }
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        {/* <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span> */}
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
