import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './inicio.jsx';
import './index.scss'; // Importando o estilo global

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);



import '../styles/Inicio.scss'; 

function Inicio() {
  return (
    <div className="inicio-container">
      <h1>Informações do Aluno</h1>
      <p><strong>Nome Completo:</strong> Eduardo Quinto Sequeira</p>
      <p><strong>Turma:</strong>Info B</p>
    </div>
  );
}
import React, { useState } from 'react';
import '../styles/Multiplicar.scss'; // Importando o estilo

function Multiplicar() {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcularMultiplicacao = () => {
    // Converte para número, tratando vírgula e ponto
    const n1 = parseFloat(String(numero1).replace(',', '.'));
    const n2 = parseFloat(String(numero2).replace(',', '.'));

    if (!isNaN(n1) && !isNaN(n2)) {
      setResultado(n1 * n2);
    } else {
      setResultado('Erro: Insira números válidos.');
    }
  };

  return (
    <div className="multiplicar-container">
      <h1>Calculadora de Multiplicação</h1>
      <div className="input-group">
        <input
          type="text"
          value={numero1}
          onChange={(e) => setNumero1(e.target.value)}
          placeholder="Número 1"
          className="number-input"
        />
        <input
          type="text" 
          value={numero2}
          onChange={(e) => setNumero2(e.target.value)}
          placeholder="Número 2"
          className="number-input"
        />
      </div>
      <button onClick={calcularMultiplicacao} className="calc-button">
        Calcular
      </button>

      {resultado !== null && (
        <h2 className="resultado">
          Resultado: {resultado}
        </h2>
      )}
    </div>
  );
}



export default Inicio;