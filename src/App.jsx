import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './Pages/Home';
import Category from './Pages/Category';
import Projet from './Pages/Projet';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/projet/:id" element={<Projet />} />
        <Route exact path="/category/:id" element={<Category />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
