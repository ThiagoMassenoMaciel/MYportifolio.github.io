
import empresa2 from "../../assets/img/Empresa2.png"
import ensinoMEDIO from "../../assets/img/Ensino_Medio.png"

import Cursos from "./Cursos.jsx";

const Formacao = ()=>{
  const arrayy = [
    {
      img: empresa2, 
      nome:"Bacharel em Sistemas de Informação",
      instituicao: "Centro Universitário 7 de Setembro",
      tempo: "2022.1 - Presente"
    }
    ,
    {
      img: ensinoMEDIO, 
      nome:"Curso Técnico em Redes de Computadores",
      instituicao: "E.E.E.P.Francisco Aristóteles de Sousa",
      tempo: "2018.1 - 2020.2"
    }
  ]

  return(
    <div className="formacao">
      <h1>Formação</h1>
      
      <Cursos array={arrayy}/>

    </div>
  )
}

export default Formacao