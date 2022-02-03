import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Category from './Pages/Category';
import Projet from './Pages/Projet';
import About from './Pages/About';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/projet/:id" element={<Projet />} />
        <Route exact path="/category/:id" element={<Category />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
