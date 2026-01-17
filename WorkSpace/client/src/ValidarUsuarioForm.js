import React, { useState } from 'react';

function ValidarUsuarioForm() {
  const [usuario, setUsuario] = useState('');
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setResultado(null);
    try {
      const response = await fetch('/api/validarUsuario', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ usuario }),
      });
      const data = await response.json();
      if (response.ok) {
        setResultado(data);
      } else {
        setError(data.message || 'Error al validar usuario');
      }
    } catch (err) {
      setError('Error de conexión');
    }
  };

  return (
    <div>
      <h2>Validar Usuario</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={usuario}
          onChange={e => setUsuario(e.target.value)}
          placeholder="Ingrese usuario"
          required
        />
        <button type="submit">Validar</button>
      </form>
      {resultado && <div>Resultado: {JSON.stringify(resultado)}</div>}
      {error && <div style={{color: 'red'}}>Error: {error}</div>}
    </div>
  );
}

export default ValidarUsuarioForm;
