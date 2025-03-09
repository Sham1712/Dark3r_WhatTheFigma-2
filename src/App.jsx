import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Landing from './Components/Landing';
import ProductPage from './Components/ProductPage';
import Article from './Components/Article';
import About from './Components/about'
import Login from './Components/login';
import Shop from './Components/Shop'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/About-us" element={<About/>}/>
        <Route path="/Article" element={<Article/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/Product-Page" element={<ProductPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
