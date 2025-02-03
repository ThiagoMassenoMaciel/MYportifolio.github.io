import PropTypes from "prop-types";

const Projeto =({linkPROJETO, imgPROJETO, titlePROJETO, descricaoPROJETO, techUsed})=>{
  return(
    <section > 
      <a href={linkPROJETO}>
        <img src={imgPROJETO} alt="Foto do projeto"/>
        {titlePROJETO}
        <h4>
          {descricaoPROJETO}
        </h4>
        <div id="TechUsed">

          {
            techUsed.map((item,index) =>(
              <img key={index} src={item} alt="tech"/>
            ))
          }

        </div>

      </a>
    
    </section>
  )
}

Projeto.propTypes ={
  linkPROJETO: PropTypes.string.isRequired, 
  imgPROJETO: PropTypes.string.isRequired, 
  titlePROJETO: PropTypes.string.isRequired, 
  descricaoPROJETO: PropTypes.string.isRequired, 
  techUsed: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Projeto