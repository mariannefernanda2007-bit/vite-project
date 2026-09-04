
function App() {
  
  let cliques = 0 // useState


  let nome = "Mary"
  let sobrenome = "pereira"
  let nome_completo = nome+" "+sobrenome

  function aumentarClique(){
    cliques += 1
  }

  return (
    <div>
      <h1>Olá {2+2} mundo!</h1>
      <p>Estou aprendendo React XD</p>
      <p>Meu nome é {nome} {sobrenome} </p>

      <hr/>
      <p>Voce clicou <strong>{cliques}</strong> vezes</p>
      <button onClick={aumentarClique} >Clique aqui</button>
    </div>
  )
}

export default App
