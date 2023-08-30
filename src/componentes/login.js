import React from 'react'
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Usuario" /> <br/>
      <input type="password" placeholder="Contraseña" /> <br/><br/>
      <button type="submit">Iniciar sesión</button> <br/>
    </form>
  );
};

export default Login;


