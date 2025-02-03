import PropTypes from "prop-types";
import Article from "./Article.jsx";

const SocialMIDIA = ({ array})=>{

  return(
    <>
    {array.map((item,index) => 
    (
      <Article key={index} url={item.url} text={item.text} img={item.img} />
    ))}
    </>
  )
}

SocialMIDIA.propTypes = {
  array: PropTypes.arrayOf(PropTypes.shape({  
    url: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,}))
}

export default SocialMIDIA;