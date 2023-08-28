import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from "./pags/Layout";
import Inicio from "./pags/inicio";
import Login from "./pags/login";
import Registro from "./pags/registro";

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
