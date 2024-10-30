import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./Components/SearchAppBar/ResponsiveAppBar";
import Carta from "./Components/ActionAreaCard/ActionAreaCard";
import Buscar from "./Components/Buscar/Buscar";
import CharacterDetail from "./Components/CardCompleta/CharacterDetail"
import Favoritos from "./Components/Favoritos/Favoritos"
function App() {
  const [personajes, setPersonajes] = useState([]);
  useState(() => {
    const obtenerCaracteres = async () => {
      const respuesta = await fetch("https://dattebayo-api.onrender.com/characters");
      const datos = await respuesta.json();
      setPersonajes(datos.characters);
    };
    obtenerCaracteres();
  }, []);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <div className='carta-container'>
            {personajes.map((personaje) => (
              <Carta key={personaje.id} personaje={personaje} />
            ))}
          </div>
        } />
        <Route path="/buscar" element={<Buscar personajes={personajes}/>} />
        <Route path="/personaje/:id" element={<CharacterDetail personajes={personajes} />} /> 
        <Route path="/favoritos/" element={<Favoritos personajes={personajes}/>} /> 

      </Routes>
    </Router>
  );
}
export default App;
