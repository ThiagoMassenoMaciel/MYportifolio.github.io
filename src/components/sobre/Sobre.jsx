import Skill from "./Skill.jsx";

import github from "../../assets/img/github.png";
import linkedin from "../../assets/img/linkedin.png";
import zap from "../../assets/img/zap.png";
import instagram from "../../assets/img/instagram.png";
import gmail from "../../assets/img/gmail.png";
import telefone from "../../assets/img/telefone.png";

import idioma1 from "../../assets/img/idioma_1.png";
import idioma2 from "../../assets/img/idioma_2.png"
import SocialMIDIA from "./SocialMIDIA.jsx";

import Home from "../home/Home.jsx";

const Sobre =()=>{

  const array = [
    {
      url: "https://github.com/ThiagoMassenoMaciel",
      text: "Github",
      img: github,
    }
    ,
    {
      url:" https://www.linkedin.com/in/tmm3/",
      text: "Linkedin",
      img: linkedin,
    }
    ,
    {
      url: "https://www.instagram.com/thiagomasseno/",
      text: "Instagram",
      img: instagram
    }
    ,
    {
      url: "https://wa.me/5585992210323?text=Olá!%20Gostaria%20de%20entrar%20em%20contato",
      text: "Whatsapp",
      img: zap,
    }
    ,
    {
      url: " ",
      text:"85 992210323",
      img: telefone,
    }
    ,
    {
      url: " ",
      text: "thiagomasseno3@gmail.com",
      img: gmail,
    }
  ]

  return(
    <>
      <Home/>
      
      <div className="sobre">
        
        <h1>Sobre</h1>
        <p>
        Sou um desenvolvedor de software iniciante e estou graduando em Sistemas de Informação com foco na criação e desenvolvimento de sistemas web front-end . E futuramente almejo construir aplicações web full-Stack.
        </p>
        <h2>Habilidades</h2>
        <section id="skills">
          
          <Skill text="Git"/>
          <Skill text="html5"/>
          <Skill text="Css3"/>
          <Skill text="JavaScript"/>
          <Skill text="React"/>
          <Skill text="Desenvolvimento Web"/>
          <Skill text="Java"/>
          <Skill text="Figma"/>
          <Skill text="Proatividade"/>
          <Skill text="Comunicação"/>
          
        </section>
        <h2>Contato</h2>
        <p>Clique no ícone da rede social que você deseja entrar em contato comigo</p>
        <div className="socialMIDIA">
          <SocialMIDIA array={array} />
        </div>

        <h2>Idiomas</h2>
        <p>Sou fluente em duas línguas : Portugês e Inglês</p>
        <div id="Flex-row">
          <img src={idioma1} alt="Bandeira do Brasil" />
          <img src={idioma2} alt="Bandeira do USA" />
        </div>
    </div>
    </>

  )
}

export default Sobre
