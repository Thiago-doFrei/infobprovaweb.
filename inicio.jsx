import { Routes, Route, Link } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Multiplicar from './pages/Multiplicar';

function App() {
  return (
    <>
      <header>
        <nav className="navigation-menu">
          <Link to="/">Início</Link>
          <Link to="/multiplicar">Multiplicar</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/multiplicar" element={<Multiplicar />} />
        </Routes>
      </main>
    </>
  );
}

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


import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Multiplicar from './pages/Multiplicar';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Início</Link>
            </li>
            <li>
              <Link to="/multiplicar">Multiplicar</Link>
            </li>
          </ul>
        </nav>

        <main className="content">
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/multiplicar" element={<Multiplicar />} />
            </Routes>
        </main>

      </div>
    </Router>
  );
}

export default App;
