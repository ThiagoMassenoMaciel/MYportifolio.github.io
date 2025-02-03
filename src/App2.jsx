//guardar o estado inicial antes de testar a novo componente
import { Component } from "react";

import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home.jsx";
import Sobre from "./components/sobre/Sobre.jsx";

class App2 extends Component{
  constructor(props) {
    super(props);

    this.state = {
      flagHEADER: false,
      intoMAIN : (<Home/>)
    };
  }

  handleClick = ()=>{
    this.setState({flagHEADER: !this.state.flagHEADER})
    
    this.setState({intoMAIN: this.state.flagHEADER ? (<Home/>):(<Sobre/>)})

  }
  render() {
    const menu = ["Sobre", "Carreira", "Formação", "Cursos", "Projetos"]
    return (
      <div className="App">
        <Header menu={menu} functionn={this.handleClick}/>
        <main>
          {this.state.intoMAIN}
        </main>
      </div>
    );
  }
}

export default App2