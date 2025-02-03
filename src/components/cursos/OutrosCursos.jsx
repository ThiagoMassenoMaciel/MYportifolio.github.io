import Block from "./Block.jsx"

const OutrosCursos = ()=>{
  const array = [
    {
      nome: "Inteligencia Artificial na prática",
      instituicao: "Plataforma online Rocketseat",
      tempo: "2024",
      certificado: "https://app.rocketseat.com.br/certificates/b05d9d8a-8a07-4ef8-b84f-4215a52a7ebf"
    }
    ,
    {
      nome: "Curso de Java",
      instituicao: "Plataforma online Rocketseat",
      tempo: "2023",
      certificado: "https://app.rocketseat.com.br/certificates/932e97d3-5570-4916-85ee-c34660a0140d",
    }
    ,
    {

      nome: "Empreendedorismo - Patrocínio da empresa Sebrae junto com a Secretaria de Educação.", 
      instituicao: "E.E.E.P.Professor Francisco Aristóteles de Sousa, Itaitinga -CE .", 
      tempo: "2018",
      certificado: ""
    }
    ,
    {
      nome: "Informatica Básica -Patrocínio da Prefeitura do município de Eusébio e fundação Alphaville.", 
      instituicao: "Pollo Cultural do Bairro Jabuti , Eusébio - CE.", 
      tempo: "2017",
      certificado: ""
    }
  ]

  return(
    <div className="cursos">
      <h1>Cursos</h1>
      <h2 id="sessao">Esta sessão são outros treinamentos que fiz.</h2>
      <div className="varios">
        {array.map((item,index) =>(
          <Block 
            key={index}
            nome={item.nome}
            instituicao={item.instituicao}
            tempo={item.tempo}
            certificado={item.certificado}
          />
        ))}

      </div>
    </div>
  )
}

export default OutrosCursos