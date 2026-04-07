import { useState } from 'react';

export default function Calorias() {
  const [total, setTotal] = useState(0);
  const [comida, setComida] = useState('');
  const [cal, setCal] = useState(0);

  const agregarCalorias = () => {
    setTotal(total + parseInt(cal));
    setComida('');
    setCal(0);
  };

  return (
    <div style={{ padding: '15px', border: '2px solid #FF9800', borderRadius: '10px', marginTop: '20px' }}>
      <h3 style={{ color: '#FF9800' }}>🔥 Contador de Calorías </h3>
      <p>Total hoy: <strong>{total} kcal</strong></p>
      <input 
        type="text" placeholder="¿Qué comiste?" value={comida}
        onChange={(e) => setComida(e.target.value)} 
      />
      <input 
        type="number" value={cal}
        onChange={(e) => setCal(e.target.value)}
        style={{ width: '60px', marginLeft: '10px' }}
      />
      <button onClick={agregarCalorias} style={{ marginLeft: '10px', backgroundColor: '#FF9800', color: 'white', border: 'none', borderRadius: '5px', padding: '5px' }}>
        Añadir
      </button>
    </div>
  );
}