import PropTypes from "prop-types";

const Emprego = ({img, cargo, empresa, vinculo, tempoTrabalhado, atividades })=>{
  return(
    <section>
      <img src={img} alt="icone da 1º empresa  tal qual tive experiência profissional"/>
      <article>
        <h3 alt="Nome do cargo ocupado">{cargo}</h3>
        <h5 alt="Nome da empresa | Vinculo empregaticio | Tempo estagiado ex: jan até set de 2021 - 3 meses">
          {empresa} {" "}|{" "} 
          {vinculo} {" "}|{" "} 
          {tempoTrabalhado}
        </h5>
        <p>
          Nesta experiência profissional, aprendi :<br/>
          {atividades.map((item, index)=>
           <span key={index}>▶{item}<br/></span>
          )}

        </p>
      </article>
    </section>
  )
}

Emprego.propTypes ={
  img: PropTypes.string.isRequired,
  cargo: PropTypes.string.isRequired,
  empresa: PropTypes.string.isRequired,
  vinculo: PropTypes.string.isRequired,
  tempoTrabalhado: PropTypes.string.isRequired,
  atividades: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Emprego