import i4 from "../../assets/img/i4.png"

const Home =()=>{
  return(
    <div className="Home">
      <div className="hero">
        <h1>Thiago Masseno Maciel</h1>
        <h3>Programador Front-end</h3>
        <button type="button">
          <a href="https://www.linkedin.com/in/tmm3/" target="_blank" >veja o meu linkedin</a>
        </button>
      </div>
      <img style={{width:'50%'}} src={i4} alt="Picture-home" />

    </div>

  )
}

export default Home;