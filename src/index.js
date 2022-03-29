import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './App.scss'
import App from './App';
import Home from './pages/Home';
import Units from './pages/Units';
import UnitDetails from './pages/UnitDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} /> 
      <Route path="/units" element={<Units />} />
      <Route path="/units/:id" element={<UnitDetails />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
