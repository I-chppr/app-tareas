import React from 'react'
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // ...Aqui verificamos si el usuario inició sesión correctamente

    // Si el usuario inició sesión correctamente, lo redirigimos a la página dashboard
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Usuario" />
      <input type="password" placeholder="Contraseña" />
      <button type="submit">Iniciar sesión</button>
    </form>
  );
};

export default Login;