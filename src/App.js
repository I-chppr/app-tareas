import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from "./componentes/Layout";

import Login from "./componentes/login";
import Registro from "./componentes/registro";
import React, { useState } from "react";
import TaskList from './componentes/TaskList';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<TaskList/>} />
          <Route path="login" element={<Login />} />
          <Route path="registro" element={<Registro />} />    
        </Route>
      </Routes>
    </div>
  );
}

export default App;
