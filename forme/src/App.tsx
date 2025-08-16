import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './Component/Login';
import { Surprise } from './Component/surprice';

function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/surprise" element={<Surprise/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
