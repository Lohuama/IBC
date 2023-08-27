import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './resume.pdf';


const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>Conheça Nossos Grupos </span>
        <span>Cresça Conosco!</span>
        <spane>
        Em nossa jornada de fé, a caminhada em grupo fortalece e enriquece. Na Igreja Batista Comunhão, 
        <br />
        Oferecemos uma variedade de grupos que o ajudarão a crescer espiritualmente e a construir relacionamentos significativos.
        <br />
        De grupos de estudo bíblico a encontros de oração e atividades de serviço comunitário,
        <br />
        há um lugar para você se conectar, aprender e compartilhar. 
        <br />
        Junte-se a um de nossos grupos e embarque em uma jornada de crescimento mútuo.
        </spane>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Grupo de Louvor Comunhão"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "10rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Adejuc"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "13rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Ministério Infantil Comunhão"}
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>

        {/* 4° card */}
        <motion.div
          initial={{ left: "-11rem", top: "23rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Ministério Feminino Comunhão"}
          />
        </motion.div>
        {/* 5º */}
        <motion.div
          initial={{ top: "27rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Ministério Casais Comunhão"}
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
