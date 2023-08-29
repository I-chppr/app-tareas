import React from 'react'

export default function login() {
  return (
    <div className='container'>
      <h1>Iniciar sesión</h1>
      <input type="text" placeholder='Usuario' /> <br /><br />
      <input type="password" placeholder='Constraseña' /> <br /><br />
      <button type='submit' className="btn btn-primary">Iniciar sesión</button>
    </div>
  )
}
