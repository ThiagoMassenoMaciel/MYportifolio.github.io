import PropTypes from "prop-types";

const Block = ({nome, instituicao, tempo, certificado})=>{
  let flag ;
  if(certificado.length > 0){
    flag = <a target="_blank" href={certificado}>click aqui e veja o certificado</a>
  }else{
    flag = ""
  }
  return(
    <section>
      <h2 id="h2" >{tempo}</h2>
      <h2>{nome}</h2>
      <p>
        {instituicao}
      </p>
      {flag}
    </section>
  )
}

Block.propTypes ={
  nome: PropTypes.string.isRequired,
  instituicao: PropTypes.string.isRequired,
  tempo: PropTypes.string.isRequired,
  certificado: PropTypes.string.isRequired,
};

export default Block;