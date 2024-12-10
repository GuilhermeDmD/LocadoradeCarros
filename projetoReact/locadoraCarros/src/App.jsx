import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Alugados from './components/Alugados.jsx';
import Menu from './components/Menu.jsx';
import Carros from './components/Carros.jsx';
import Usuario from './components/Usuario.jsx';
import Header from './components/header.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
    <Header />
    <Router>
        <Menu />
        <div className="page-content">
          <Routes>
            <Route path="/" element={<h2>Bem-vindo à Localize!</h2>} />
            <Route path="/Carros" element={<Carros />} />
            <Route path="/Alugados" element={<Alugados />} />
            <Route path="/Usuario" element={<Usuario />} />
          </Routes>
        </div>
    </Router>
    <Footer />
    </>
  );
}

export default App;
