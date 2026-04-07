import dieta from '../data/dieta.json';

export default function Alimentacion() {
  return (
    <div style={{ padding: '15px', border: '2px solid #4CAF50', borderRadius: '10px', marginTop: '20px', textAlign: 'left' }}>
      <h3 style={{ color: '#4CAF50' }}>🥗 Plan de Alimentación </h3>
      {dieta.map((item) => (
        <div key={item.id} style={{ marginBottom: '8px', borderBottom: '1px solid #eee' }}>
          <strong>{item.comida}:</strong> {item.descripcion} 
          <br /><small>{item.calorias} kcal</small>
        </div>
      ))}
    </div>
  );
}