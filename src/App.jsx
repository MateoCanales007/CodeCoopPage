import React from 'react';

import Home from './pages/Home';
import Nosotros from './pages/Nosotros'; 
import Planes from './pages/Planes';
import Contacto from './pages/Contacto';
import Portafolio from './pages/Portafolio';

import Header from './components/Header';
import Footer from './components/Footer';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/nosotros" element={<Nosotros />} /> 
          <Route path="/planes" element={<Planes />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/blog" element={<Portafolio />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;