import PropTypes from "prop-types";

const Article = ({url, text, img})=>{
  return(
    <article>
      <a href={url} target="_blank" >
        <img style={{width:'50px', height:'50px', borderRadius:'10px'}} src={img} alt={text}/>
      </a>
      <h3>{text}</h3>
    </article>
  )
}

Article.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
}

export default Article;