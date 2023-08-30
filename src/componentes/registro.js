import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Registro() {
  const [nombreDeUsuario, setNombreDeUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [confirmarContraseña, setConfirmarContraseña] = useState("");
  const [registroExitoso, setRegistroExitoso] = useState(false);
  const navigate = useNavigate();
  const handleEnviar = (e) => {
    e.preventDefault();
    
    if (contraseña !== confirmarContraseña) {
      alert("Las contraseñas no coinciden");
      return;
    }

    if (contraseña.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    alert("Registro exitoso");
    setRegistroExitoso(true);
    navigate("/");
  };

  return (
    <div>
      {registroExitoso ? (
        <div>
          <p>¡Registro exitoso para {nombreDeUsuario}!</p>
          <p>Ahora puedes utilizar los datos en otras partes del programa.</p>
        </div>
      ) : (
        <form onSubmit={handleEnviar}>
          <div>
            <label htmlFor="nombreDeUsuario">Nombre de usuario:</label>
            <input
              type="text"
              id="nombreDeUsuario"
              placeholder="Nombre de usuario"
              value={nombreDeUsuario}
              onChange={(e) => setNombreDeUsuario(e.target.value)}
              required
            />
          </div>
          <br />
          <div>
            <label htmlFor="contraseña">Contraseña:</label>
            <input
              type="password"
              id="contraseña"
              placeholder="Contraseña"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
              required
            />
          </div>
          <br />
          <div>
            <label htmlFor="confirmarContraseña">Confirmar contraseña:</label>
            <input
              type="password"
              id="confirmarContraseña"
              placeholder="Confirmar contraseña"
              value={confirmarContraseña}
              onChange={(e) => setConfirmarContraseña(e.target.value)}
              required
            />
          </div>
          <br />
          <button type="submit" className="btn btn-primary">
            Registrarse
          </button>
        </form>
      )}
    </div>
  );
}

export default Registro;
