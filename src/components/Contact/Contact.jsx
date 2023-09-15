import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2mu5xtl",
        "template_m5udu2c",
        form.current,
        "VLwg1ltOWvnCYAiK_"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{color: darkMode?'white': ''}}></span>
          <span></span>
          <div className="t-heading">
            <span style={{color: '#242D49'}}>O Templo da  </span>
            <span >Igreja Batista Comunhão  </span>
            <span style={{color: '#242d49'}}>está localizado em: </span>
          </div>
          <br/>
          <span>
            Avenida Belém, s/n Planalto da Boa Esperança – Valentina – João Pessoa - PB, CEP: 58065051
          </span>
          <span>
            <b style={{color: '#242d49', fontWeight: 'bold'}}>Ponto de Referência:</b> Uma rua enfrente ao Detran do Valentina, Na rua da pizzaria e lanchonete gourmet JG
          </span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        
        {/* <form ref={form} onSubmit={sendEmail}>
          <span type="text" name="user_name" className="user"  placeholder="Name">
          Avenida Belém, s/n Planalto da Boa Esperança – Valentina – João Pessoa - PB
          </span>
          <input type="email" name="user_email" className="user" placeholder="Email"/>
          <textarea name="message" className="user" placeholder="Message"/>
          <input type="submit" value="Send" className="button"/>
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form> */}
      </div>
    </div>
  );
};

export default Contact;
