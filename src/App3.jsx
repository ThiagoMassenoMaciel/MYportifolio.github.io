//guardar a lógica anterior antes de já trocar pela nova
// antes de deixar de usar as flags
import { Component } from "react";
import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home.jsx";
import Sobre from "./components/sobre/Sobre.jsx";
import Carreira from "./components/carreira/Carreira.jsx";
import Formacao from "./components/formacao/Formacao.jsx";
import Cursos from "./components/cursos/Cursos.jsx";
import Projetos from "./components/projetos/Projetos.jsx";

class App3 extends Component{
  constructor(props) {
    super(props);

    this.state = {
      flagSOBRE: false,
      flagCARREIRA: false,
      flagFORMACAO: false,
      flagCURSOS: false,
      flagPROJETOS: false,
      intoMAIN : (<Home/>)
    };
  }
  

  sobref = ()=>{
    this.setState({flagSOBRE: !this.state.flagSOBRE})
    
    this.setState({intoMAIN: this.state.flagSOBRE ? (<Home/>):(<Sobre/>)})

  }

  carreiraf = ()=>{
    this.setState({flagCARREIRA: !this.state.flagCARREIRA})
    
    this.setState({intoMAIN: this.state.flagCARREIRA ? (<Home/>):(<Carreira/>)})

  }

  formacaof = ()=>{
    this.setState({flagFORMACAO: !this.state.flagFORMACAO})
    
    this.setState({intoMAIN: this.state.flagFORMACAO ? (<Home/>):(<Formacao/>)})

  }

  cursosf = ()=>{
    this.setState({flagCURSOS: !this.state.flagCURSOS})
    
    this.setState({intoMAIN: this.state.flagCURSOS ? (<Home/>):(<Cursos/>)})

  }

  projetosf = ()=>{
    this.setState({flagPROJETOS: !this.state.flagPROJETOS})
    
    this.setState({intoMAIN: this.state.flagPROJETOS ? (<Home/>):(<Projetos/>)})

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

export default App3