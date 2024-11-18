import React, { useState } from 'react';
import './App.css';

function App() {
  const [page, setPage] = useState('home');  // Estado para controle da página atual

  // Função para mudar a página
  const changePage = (pageName) => {
    setPage(pageName);
  };

  return (
    <>
    <div>
      <div className="cabecalho">
        <h1>Localize🚗</h1>
        <nav>
          <button onClick={() => changePage('home')}>Home</button>
          <button onClick={() => changePage('carros')}>Carros</button>
          <button onClick={() => changePage('alugados')}>Alugados</button>
          <button onClick={() => changePage('usuarios')}>Usuários</button>
        </nav>
      </div>

      {/* Isso aqui é uma gambiarra para simular o menu
      Para que o menu funcione teremos que utilizar react Routes
      para isso cada um deve instalá-lo no projeto utilizando o seguinte comando no console
      npm install react-router-dom*/}
      <div className="content">
        {page === 'home' && <h2>Bem-vindo à página inicial!</h2>}
        {page === 'carros' && <h2>Lista de Carros</h2>}
        {page === 'alugados' && <h2>Lista de Aluguéis</h2>}
        {page === 'usuarios' && <h2>Lista de Usuários</h2>}
      </div>
      <footer>
        <h3>Localize🚗</h3>
        <p>Todos os direitos reservados 2024</p>
      </footer>
    </div>

    </>
  );
}

export default App;
