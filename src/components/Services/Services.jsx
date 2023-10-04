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
      resumo: `music
      `
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
      resumo: `O Ministério ADEJUC é um Ministério voltado para edificação dos Jovens e Adolescentes da igreja.
      \nQue tem como Objetivo Esclarecer e Ensinar qual o papel do Jovem e do Adolescente no Reino de Deus e na sociedade.
      Esse Ministério existe para Desenvolver a comunhão e integração entre eles, Contribuir para o desenvolvimento e Crescimento Espiritual de cada um deles e Participar de maneira direta e ativa na vida, problemas, dificuldades e necessidades de cada um dos Jovens e Adolescente do Ministério.
      A IBC reconhece a necessidade de relacionamentos entre os jovens e adolescentes, e a dificuldade de seus envolvimentos no serviço do Senhor. Também está consciente do peso da influência mundanas em suas vidas. Portanto, faz-se necessário um trabalho onde possam desenvolver seus dons, criar laços de comunhão, terem momentos de aprendizado e Crescimento, contribuindo assim para sua maturidade cristã. 
      `
      
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
      resumo: `infantil
      `
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
      resumo: `mulheres
      `
    },
    {
      emoji: casal,
      heading: "Ministério de Casais",
      titulo: "Ministério de Casais",
      resumo: "Resumo do Ministério de Casais",
      color: "rgba(252, 166, 31, 0.45)",
      images: [casal, music], // Substitua com as URLs reais das imagens
      animation: {
        initial: { top: "27rem", left: "25rem" },
        whileInView: { left: "12rem" },
      },
      resumo: `O Ministério de Casais é um Ministério voltado para edificação dos casais da Igreja. Este Ministério existe para servir, ajudar e auxiliar a vida conjugal dos Casais. 
      Que tem como Objetivo esclarecer qual o papel do homem e da mulher no Reino de Deus, na família e na sociedade, não só de Maneira pessoal, mas principalmente como Casal.
      A Ideia do Ministério é Desenvolvendo a comunhão e integração entre eles, fazendo com que eles vivam de maneira Bíblica que Agrade a Deus, Contribuindo assim para o desenvolvimento e Crescimento Espiritual de cada um deles e Participando de maneira direta e ativa na vida Conjugal e Particular de cada um, tentando ajudar a lhe dá com os problemas, dificuldades e necessidades que cada um dos Casais possam ter na caminhada.
      A IBC sabe e reconhece a necessidade de relacionamentos entre os casais, também estamos cientes da dificuldade de seus envolvimentos no serviço do Senhor, sabemos do peso da influência mundana e das más influencias em suas vidas. Portanto, faz-se necessário um trabalho onde possam desenvolver seus dons, criar laços de comunhão, terem momentos de aprendizado e Crescimento, contribuindo assim para sua conjugal e maturidade cristã.
      Sabemos o quando o Casamento é atacado e bombardeado diariamente, e o ministério de Casais tem como Meta ajuda os casais a lhe da com os seu conflitos, e a viverem juntos para sempre, atá que a morte os separe. `
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
        <CardDetail style={{marginBottom: '10px', fontSize: '6px !important'}}
          imageUrl={cards[selectedCardIndex].emoji}
          heading={cards[selectedCardIndex].heading}
          onClose={handleCloseCardDetail}
          images={cards[selectedCardIndex].images}
          resumo={cards[selectedCardIndex].resumo}
          />
          
      )}
    </div>
  );
};

export default Services;
