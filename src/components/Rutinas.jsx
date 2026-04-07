import { useState } from 'react';
import listaEjercicios from '../data/ejercicios.json';

export default function Rutinas() {
  const [busqueda, setBusqueda] = useState('');

  const ejerciciosFiltrados = listaEjercicios.filter(ej => 
    ej.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div style={{ padding: '15px', border: '2px solid #2196F3', borderRadius: '10px', marginTop: '20px', backgroundColor: '#fdfdfd' }}>
      <h3 style={{ color: '#2196F3' }}>🏋️ Buscador de Rutinas (RF005)</h3>
      
      <input 
        type="text" 
        placeholder="Buscar ejercicio..." 
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        style={{ width: '90%', padding: '8px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #ccc' }}
      />

      <div style={{ textAlign: 'left' }}>
        {ejerciciosFiltrados.length > 0 ? (
          ejerciciosFiltrados.map((ej) => (
            <div key={ej.id} style={{ marginBottom: '10px', padding: '5px', borderBottom: '1px solid #eee' }}>
              <strong>{ej.nombre}</strong> - {ej.series} <br />
              <small style={{ color: '#666' }}>Músculo: {ej.musculo}</small>
            </div>
          ))
        ) : (
          <p style={{ color: 'red' }}>No se encontraron ejercicios.</p>
        )}
      </div>
    </div>
  );
}