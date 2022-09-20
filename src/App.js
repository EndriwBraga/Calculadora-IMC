import {useState} from 'react'
import './app.css';

export default function App(){
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  const [mensagem, setMensagem] = useState('')

  function calcularIMC(){
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if (imc  < 18.6){
      setMensagem("Você esta abaixo do peso! Seu icm: " + imc.toFixed(2))
    }
    else if (imc >= 18.6 && imc < 24.9){
      setMensagem("Voce esta no peso ideal! Seu icm: " + imc.toFixed(2))
    }
    else if (imc >= 24.9 && imc < 34.9){
      setMensagem("Você esta levemente acima do peso! Seu icm: " + imc.toFixed(2))
    }
    else if (imc > 34.9){
      setMensagem("Cuidado Obesidade! Seu icm: " + imc.toFixed(2))

    }
  }

  return(
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu IMC</span>

      <div className="area-input">
        <input type = "text" placeholder="Peso em (Kg) Ex: 90"  maxLength={6}  value={peso} onChange={(e) => setPeso(e.target.value)}></input> 


        <input type = "text" placeholder="Altura em (cm) Ex: 180 cm" maxLength={3} value={altura} onChange={(e) =>setAltura(e.target.value)}></input>
        <button onClick={calcularIMC}>Calcular</button>

        <h2>{mensagem}</h2>

      </div>
    



    </div>

  )
}