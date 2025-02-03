import PropTypes from "prop-types";
import Curso from "./Curso.jsx";
const Cursos = ({array})=>{
  return(
    <>
      {
        array.map((item,index)=>(
          <Curso 
            key={index}
            img={item.img} 
            nome={item.nome}
            instituicao={item.instituicao} 
            tempo={item.tempo}
          />
        ))

      }
    </>
  )
}

Cursos.propTypes = {
  array : PropTypes.arrayOf(PropTypes.shape({
    img: PropTypes.string.isRequired,
    nome: PropTypes.string.isRequired,
    instituicao: PropTypes.string.isRequired,
    tempo: PropTypes.string.isRequired,
  })).isRequired,
};

export default Cursos