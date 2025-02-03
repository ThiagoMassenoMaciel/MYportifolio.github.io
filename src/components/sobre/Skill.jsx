import PropTypes from "prop-types"
import "../../styles/Skill.css"

const Skill = ({text})=>{
  return(
    <section id="section">
        <div id="title_skill">
          <div id="border">                                                                            
            <div id="textoSHORT">
              {text}
            </div>
          </div>
        </div>
        
      </section>
  )
}

Skill.propTypes ={
  text: PropTypes.string.isRequired,
}

export default Skill