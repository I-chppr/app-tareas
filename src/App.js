import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from "./componentes/Layout";
import Inicio from "./componentes/inicio";
import Login from "./componentes/login";
import Registro from "./componentes/registro";
import React, { useState } from "react";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Inicio />} />
          <Route path="login" element={<Login />} />
          <Route path="registro" element={<Registro />} />    
        </Route>
      </Routes>
    </div>
  );
}

export default App;
