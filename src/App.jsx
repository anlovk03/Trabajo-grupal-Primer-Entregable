import Navbar from './components/Navbar';
import Sueno from './components/Sueno';
import Calorias from './components/Calorias';
import Alimentacion from './components/Alimentacion';
import Rutinas from './components/Rutinas';
import './styles/App.css';

function App() {
  return (
    <div className="container" style={{ maxWidth: '800px', margin: 'auto', padding: '10px' }}>
      {/* Encabezado Profesional */}
      <Navbar /> 

      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#1a73e8' }}>FitLive Dashboard</h1>
        <p style={{ color: '#666' }}>Sistema de Gestión de Bienestar Personal v1.0</p>
      </header>

      <main style={{ display: 'grid', gap: '20px' }}>
        {/* Sección de Registro e Interactividad */}
        <div className="section-group">
          <Sueno />        {/* RF011: Registro de Sueño */}
          <Calorias />     {/* RF007: Contador de Calorías */}
        </div>

        {/* Sección de Consulta de Datos (JSON) */}
        <div className="section-group">
          <Alimentacion /> {/* RF004: Plan de Alimentación */}
          <Rutinas />      {/* RF005: Buscador de Rutinas */}
        </div>
      </main>

      <footer style={{ marginTop: '50px', textAlign: 'center', fontSize: '0.8rem', color: '#999' }}>
        <p>© 2026 FitLive Systems - Proyecto de Construcción de Software</p>
      </footer>
    </div>
  );
}

export default App;