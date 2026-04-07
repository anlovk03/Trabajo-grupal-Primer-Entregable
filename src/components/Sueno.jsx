import { useState } from 'react';

export default function Sueno() {
  const [horas, setHoras] = useState(0);

  return (
    <div style={{ padding: '15px', border: '2px solid #4CAF50', borderRadius: '10px', marginTop: '20px' }}>
      <h3>🛌 Registro de Sueño (RF011)</h3>
      <p>Ingresa las horas que descansaste:</p>
      <input 
        type="number" 
        onChange={(e) => setHoras(e.target.value)} 
        style={{ width: '50px', padding: '5px' }}
      />
      <p>Has dormido: **{horas}** horas hoy.</p>
    </div>
  );
}