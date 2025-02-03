import empresa1 from "../../assets/img/Empresa1.png"
import empresa2 from "../../assets/img/Empresa2.png"
import Empregos from "./Empregos.jsx";

const Carreira = ()=>{
  const arrayy = [
    {
      img: empresa1, 
      cargo: "Assistente de pesquisa em laboratório", 
      empresa: "Eletra Energy Solutions", 
      vinculo: "Estágio", 
      tempoTrabalhado: "2021", 
      atividades: ["Pacote Microsoft Office.", "Analise de Case e Testes com a linguagem C#.", "Tarefas de apoio no Laboratório de Engenharia."]
    }
    ,
    {
      img: empresa2, 
      cargo: "Suporte Ti", 
      empresa: "Faculdade Uni7 (LABINFO)", 
      vinculo: "Estágio", 
      tempoTrabalhado: "2023-2024", 
      atividades: ["Atendimento de suporte aos alunos.", "Instalação de software e monitoramento de computadores", "Acesso ao Banco de dados."]
    }
  ]
  return(
    <div className="carreira">
      <h1>Carreira</h1>
      <Empregos array={arrayy}/>
    </div>
  )
}

export default Carreira;