import { BrowserRouter } from 'react-router-dom'
import { useState, useEffect } from 'react'
import MenuWrapper from './components/MenuWrapper.jsx'
import Game from './components/Game.jsx'
import Loading from './components/Loading.jsx'

function App() {
  const [palavra, setPalavra] = useState('');
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    if (carregando) document.body.style.backgroundColor = '#000';
    else document.body.style.backgroundColor = '#5a4646';
  }, [carregando]);

  useEffect(() => {
    fetch('/palavras.txt')
      .then(response => response.text())
      .then(text => {
        const listaPalavras = text.split('\n').map(p => p.trim()).filter(p => p.length > 0);
        const indiceAleatorio = Math.floor(Math.random() * listaPalavras.length);
        const palavraSorteada = listaPalavras[indiceAleatorio];
        
        setPalavra(palavraSorteada.toUpperCase()); 
        
        setTimeout(() => {
          setCarregando(false);
        }, 3000);
      })
      .catch(error => {
        console.error("Erro ao ler o arquivo de palavras:", error);
        setPalavra("ERRO");
        setCarregando(false);
      });
  }, []);

  return (
    <BrowserRouter>
      <MenuWrapper />
      { carregando ? <Loading /> : <Game palavra = { palavra } /> }
    </BrowserRouter>
  )
}

export default App