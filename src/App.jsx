
function App() {
  
  function mensagemNias() {
    const mensagem = encodeURIComponent("Opaaa, resenha hj me pega!"); 
    const numero = "5521986468805";
    const linkWhatsApp = `https://wa.me/${numero}?text=${mensagem}`;
    window.open(linkWhatsApp, "_blank");
  }
  function respostaErrada(){
    alert("ah ta trolando po ,sifude")
  }

  return (
    <><div className="body">
      <div className="containerPrincipal">
        <div className="container">
          <h1>Resenhazinha </h1><h1>hoje</h1> <h1>te pega nao? </h1></div>
        </div>
        <h1 className="sugestao"> Sugestões </h1>
        <div className="sugestoes">
        <h2>Drinks</h2>
        <h2> Jogatina</h2>
        <h2>Trapaça</h2>
      </div>
              <div className="acima"><h1>PUTAS ACIMA DO PESO </h1></div>
       <div className="botao"> <button className="sim" onClick={mensagemNias}>yes</button>
        <button className="nao" onClick={respostaErrada}>no</button></div> </div>
    </>
  )
}

export default App

    
    
