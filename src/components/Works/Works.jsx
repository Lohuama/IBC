import React, { useContext } from "react";
import "./Works.css";
import { themeContext } from "../../Context";
const Works = () => {
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Nossa História
          </span>
          <span>Um breve resumo</span>
          <spane>
          No final do ano 2009, através de uma conversa com o jovem Wesley Arruda Oliveira o pastor Vilar é despertado para a implantação de uma igreja no Valentina de Figueiredo. Ao conversar sobre o assunto com sua esposa Ana Cristina Vilar, decidiram orar a fim de receber orientação de Deus de como e por onde começariam. No período em que estavam orando, tiveram a ideia de colocar o nome da igreja de: Igreja Batista Comunhão. Após orarem durante sete noites de vigília, decidiram fazer o primeiro culto que foi realizado na casa do Pastor Vilar no dia 19 de Janeiro de 2010. Os cultos passaram a ser realizado na residência do casal Carlos Antunes e Judite Arruda pais de Wesley Arruda Oliveira até o mês de Março de 2010. No dia 20 do mesmo mês e ano Tendo Alugado uma casa na Rua Marcos Albino Rafael Nº 157- Planalto da Boa Esperança – Valentina – João Pessoa PB, foi realizou o culto de inauguração da Igreja Batista Comunhão.

            No dia 10 de Agosto de 2014, Deus nos Presenteou com a Aquisição do prédio próprio localizado na Avenida Belém, s/n Planalto da Boa Esperança – Valentina – João Pessoa - PB, Onde a Igreja tem Funcionado e Realizado seus Trabalhos, para a Gloria de Deus. 
            <br />
          </spane>
        </div>
      </div>
    </div>
  );
};

export default Works;
