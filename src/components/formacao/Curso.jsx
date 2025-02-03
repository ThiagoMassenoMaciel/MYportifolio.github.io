import PropTypes from "prop-types";

const Curso = ({ img, nome,instituicao,tempo})=>{
  return(
    <section>
      <img  src={img} alt="Logo da escola de ensino médio tal qual frequentei"/>
      <h2>{nome}</h2>
      <p>

        <span>{tempo}</span>
        <br/>
        <span>{instituicao}.</span>

      </p>
    </section>
  )
}

Curso.propTypes = {
  img: PropTypes.string.isRequired,
  nome: PropTypes.string.isRequired,
  instituicao: PropTypes.string.isRequired,
  tempo: PropTypes.string.isRequired,
};

export default Curso;