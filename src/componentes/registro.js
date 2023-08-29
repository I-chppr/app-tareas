import React, { useState } from "react";

function Registro() {
  const [nombreDeUsuario, setNombreDeUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [confirmarContraseña, setConfirmarContraseña] = useState("");

  const handleEnviar = () => {
    if (contraseña !== confirmarContraseña) {
      alert("Las contraseñas no coinciden");
      return;
    }

  };

  return (
    <form onSubmit={handleEnviar}>
      <div>
        <label for="nombreDeUsuario"></label>
        <input
          type="text"
          id="nombreDeUsuario"
          placeholder="Nombre de usuario"
          value={nombreDeUsuario}
          onChange={(e) => setNombreDeUsuario(e.target.value)}
        />
      </div>
      <br />
      <div>
        <label for="contraseña"></label>
        <input
          type="password"
          id="contraseña"
          placeholder="Contraseña"
          value={contraseña}
          onChange={(e) => setContraseña(e.target.value)}
        />
      </div>
      <br />
      <div>
        <label for="confirmarContraseña"></label>
        <input
          type="password"
          id="confirmarContraseña"
          placeholder="Confirmar contraseña"
          value={confirmarContraseña}
          onChange={(e) => setConfirmarContraseña(e.target.value)}
        />
      </div>
      <br />
      <button type="submit" className="btn btn-primary">Registrarse</button>
    </form>
  );
}

export default Registro;