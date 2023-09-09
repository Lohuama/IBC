import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import boy from "../../img/boy.png";
import culto from "../../img/culto.png";
import youtube from "../../img/youtube.jpeg";
import logo_ibc from "../../img/logo_ibc.png";
import logo_ibc_preta from "../../img/logo_ibc_preta.png";
import humble from "../../img/humble.png";
import heartemoji from "../../img/heartemoji.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import vetorAzul from "../../img/vetorAzul.png";
import arte from "../../img/arte.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Bem-vindos à Igreja Batista Comunhão</span>
          <span style={{display: 'none'}}>IBC</span>
          <span>
          Somos uma comunidade dedicada a compartilhar o amor do Evangelho. Nosso foco é amar a Deus e ao próximo. Junte-se a nós para cultos inspiradores, estudos bíblicos e projetos de serviço à comunidade. Seja parte da nossa família enquanto crescemos espiritualmente e impactamos vidas em João Pessoa.
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Endereço</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <img src={youtube} alt="" />
          <img src={Instagram} alt="" />
      </div>
          <span style={{display: 'block', fontWeight: '100',fontSize: '14px ', color: '#788097', marginTop: ' -37px'}}>   Click nos ícones e conheça nossas redes sociais</span>
        </div>
      {/* right image side */}
      <div className="i-right"> 
        <img src={''} alt="" />
        <img src={''} alt="" />
        
        <img src={arte} alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={logo_ibc_preta}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          {/* <FloatinDiv img={humble} text1="Domingo" text2="18h00" /> */}
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          {/* <FloatinDiv img={heartemoji} text1="Louvor e " text2="Adoração" /> */}
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
