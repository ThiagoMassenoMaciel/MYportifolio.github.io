import PropTypes from "prop-types";
import Emprego from "./Emprego.jsx";

const Empregos = ({array})=>{
  return(
    <>
      {
        array.map((item,index)=>(
          <Emprego 
                  key={index}
                  img={item.img}
                  cargo={item.cargo}
                  empresa={item.empresa}
                  vinculo={item.vinculo}
                  tempoTrabalhado={item.tempoTrabalhado}
                  atividades={item.atividades}
                />
        ))
      }
    </>
  )
}

Empregos.propTypes={
  array: PropTypes.arrayOf(
    PropTypes.shape({
        img: PropTypes.string.isRequired,
        cargo: PropTypes.string.isRequired,
        empresa: PropTypes.string.isRequired,
        vinculo: PropTypes.string.isRequired,
        tempoTrabalhado: PropTypes.string.isRequired,
        atividades: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired
  ).isRequired,
};

export default Empregos