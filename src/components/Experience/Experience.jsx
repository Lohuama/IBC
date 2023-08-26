import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
          NOSSA MISSÃO
          </span>
          <span style={{display : 'none'}}>Um breve resumo</span>
          <spane>
          Propagar o Evangelho Genuíno de Cristo a todas as Pessoas, <br/ >Cultivando a Comunhão e conduzir as vidas à<br/ > verdadeira adoração a Deus.
            <br />
          </spane>
        </div>
      </div>
      
      <div className="w-right">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" , fontSize: '14px !important'}}>
          NOSSA VISÃO
          </span>
          <span style={{display : 'none'}}>Um breve resumo</span>
          <spane>
          Ser uma igreja Cristocêntrica, Fiel as Sagradas Escrituras <br/ >, que transmita o amor de Deus através de suas ações e comunhão dos seus membros, <br/ >que tenha responsabilidade com o cuidado social, emocional e espiritual de sua comunidade, <br/ > e que seja comprometida com a obra missionária.
            <br />
          </spane>
        </div>
      </div>

      <div className="w-right">
        <div className="awesome ">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
          NOSSO PROPÓSITO
          </span>
          <span style={{display : 'none'}}>Um breve resumo</span>
          <spane>
          É Adorar a Deus, Edificando a igreja por meio da Palavra Sagrada,<br/ > levando as Pessoas a uma vida de Obediência,<br/ > Amor e Serviço a Deus e ao Próximo,<br/ > Anunciando o Evangelho de Cristo Jesus a todas as Pessoas
            <br />
          </spane>
        </div>
      </div>
      
    </div>
  );
};

export default Experience;
