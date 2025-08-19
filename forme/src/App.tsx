import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './Component/Login';
import { Surprise } from './Component/surprice';

function App() {
  return (
    <BrowserRouter basename="/for-me">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/surprise" element={<Surprise />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
