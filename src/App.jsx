//Usando nenhuma flag
import { Component } from "react";
import Header from "./components/header/Header.jsx";

//import Home from "./components/home/Home.jsx";

import Sobre from "./components/sobre/Sobre.jsx";
import Carreira from "./components/carreira/Carreira.jsx";
import Formacao from "./components/formacao/Formacao.jsx";
import OutrosCursos from "./components/cursos/OutrosCursos.jsx";
import Projetos from "./components/projetos/Projetos.jsx";


class App extends Component{
  constructor(props) {
    super(props);

    this.state = {
      flagSOBRE: false,
      flagCARREIRA: false,
      flagFORMACAO: false,
      flagCURSOS: false,
      flagPROJETOS: false,
      intoMAIN : (<Sobre/>)
    };
  }


  sobref = ()=>{ 
    this.setState({intoMAIN: (<Sobre/>)})
  }

  carreiraf = ()=>{

    this.setState({intoMAIN: (<Carreira/>)})

  }

  formacaof = ()=>{
    this.setState({intoMAIN: (<Formacao/>)})

  }

  cursosf = ()=>{
    this.setState({intoMAIN:(<OutrosCursos/>)})

  }

  projetosf = ()=>{
    this.setState({intoMAIN: (<Projetos/>)})

  }

  render() {
    const menu = ["Sobre", "Carreira", "Formação", "Cursos", "Projetos"]
    const functionn = [this.sobref, this.carreiraf, this.formacaof, this.cursosf, this.projetosf]
    return (
      <div className="App">
        <Header menu={menu} functionn={functionn}/>
        <main>
          {this.state.intoMAIN}
        </main>
      </div>
    );
  }
}

export default App
