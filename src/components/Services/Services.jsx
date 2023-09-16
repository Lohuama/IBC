import React, { useContext, useState } from "react";
import "./Services.css";
import Card from "../Card/Card";
import CardDetail from "../cardDetail/CardDetail";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

import jovens from "../../img/jovens.png";
import music from "../../img/music.png";
import infantil from "../../img/infantil.png";
import mulheres from "../../img/mulheres.png";
import casal from "../../img/casal.png";

import louvor1 from '../../img/louvor.jpeg'
import adejuc1 from '../../img/adejuc.jpg'
import infantil1 from '../../img/infantil.jpg'
import mulheres1 from '../../img/rosa.jpg'
import mulheres2 from '../../img/senhoras.jpg'
import mulheres3 from '../../img/entreIrmas.jpg'

const Services = () => {
  const [isCardDetailVisible, setIsCardDetailVisible] = useState(false);
  const [selectedCardIndex, setSelectedCardIndex] = useState(-1);

  const handleCardDetailClick = (index) => {
    setIsCardDetailVisible(true);
    setSelectedCardIndex(index);
  };

  const handleCloseCardDetail = () => {
    setIsCardDetailVisible(false);
    setSelectedCardIndex(-1);
  };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  const cards = [
    {
      emoji: music,
      heading: "Grupo de Louvor Comunhão",
      titulo: "Grupo de Louvor Comunhão",
      resumo: "Resumo do Grupo de Louvor",
      images: [louvor1, jovens,], // Substitua com as URLs reais das imagens
      color: "rgba(252, 166, 31, 0.45)",
      animation: {
        initial: { left: "25rem" },
        whileInView: { left: "12rem" },
      },
    },
    {
      emoji: jovens,
      heading: "Adejuc",
      titulo: "Adejuc",
      resumo: "Resumo do Adejuc",
      images: [adejuc1, jovens], // Substitua com as URLs reais das imagens
      animation: {
        initial: { left: "-11rem", top: "10rem" },
        whileInView: { left: "-4rem" },
      },
    },
    {
      emoji: infantil,
      heading: "Ministério Infantil Comunhão",
      titulo: "Ministério Infantil",
      resumo: "Resumo do Ministério Infantil",
      color: "rgba(252, 166, 31, 0.45)",
      images: [infantil1, infantil], // Substitua com as URLs reais das imagens
      animation: {
        initial: { top: "13rem", left: "25rem" },
        whileInView: { left: "12rem" },
      },
    },
    {
      emoji: mulheres,
      heading: "Ministério Feminino Comunhão",
      titulo: "Ministério Feminino",
      resumo: "Resumo do Ministério Feminino",
      images: [mulheres1, mulheres2, mulheres3, mulheres], // Substitua com as URLs reais das imagens
      animation: {
        initial: { left: "-11rem", top: "23rem" },
        whileInView: { left: "-4rem" },
      },
    },
    {
      emoji: casal,
      heading: "Ministério Casais Comunhão",
      titulo: "Ministério de Casais",
      resumo: "Resumo do Ministério de Casais",
      color: "rgba(252, 166, 31, 0.45)",
      images: [casal, music], // Substitua com as URLs reais das imagens
      animation: {
        initial: { top: "27rem", left: "25rem" },
        whileInView: { left: "12rem" },
      },
    },
  ];

  return (
    <div className="services" id="services" style={{ marginBottom: "250px" }}>
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>
          Conheça Nossos Ministérios{" "}
        </span>
        <span>Cresça Conosco!</span>
        <spane>
          Em nossa jornada de fé, a caminhada em grupo fortalece e enriquece.
          <br />
          Na Igreja Batista Comunhão, temos alguns Ministérios que o ajudarão{" "}
          <br /> a crescer espiritualmente e a construir relacionamentos
          significativos
          <br />
          que te ajudarão na caminhada cristã.
          <br />
          De grupos de estudo bíblico a encontros de oração e atividades de ,
          <br />
          serviço comunitário há um lugar para você se conectar, aprender e
          <br />
          compartilhar. Junte-se a nós, faça parte de um dos nossos ministérios{" "}
          <br />e embarque em uma jornada de crescimento mútuo.
        </spane>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={card.animation.initial}
            whileInView={card.animation.whileInView}
            transition={transition}
            onClick={() => handleCardDetailClick(index)}
          >
            <Card
              emoji={card.emoji}
              heading={card.heading}
              color={card.color}
            />
          </motion.div>
        ))}
      </div>
      {isCardDetailVisible && selectedCardIndex !== -1 && (
        <CardDetail
          imageUrl={cards[selectedCardIndex].emoji}
          heading={cards[selectedCardIndex].titulo}
          onClose={handleCloseCardDetail}
          images={cards[selectedCardIndex].images}
        >
          <p>{cards[selectedCardIndex].resumo}</p>
        </CardDetail>
      )}
    </div>
  );
};

export default Services;
