import React, { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from "/src/credenciales.js";
import "./Favoritos.css";
import Carta from '/src/Components/ActionAreaCard/ActionAreaCard'; 
const Favoritos = ({ personajes }) => {
  const [favoritos, setFavoritos] = useState([]);
  const [loading, setLoading] = useState(true); 
  useEffect(() => {
    const fetchFavoritos = async () => {
      setLoading(true); 
      const favoritosRef = collection(db, "Personaje");
      const snapshot = await getDocs(favoritosRef);
      const favoritosData = snapshot.docs.map(doc => doc.data());
      setFavoritos(favoritosData);
      setLoading(false);
    };
    fetchFavoritos();
  }, []);
  if (loading) {
    return <div className="loader"></div>;
  }
  return (
    <div>
      {favoritos.length === 0 ? (
        <p className="no-selection">NO HAS SELECCIONADO PERSONAJES</p>
      ) : (
        <div className='carta-container'>
          {favoritos.map((favorito) => {
            const personajeEncontrado = personajes.find(p => p.id === favorito.id);
            return personajeEncontrado ? (
              <Carta key={personajeEncontrado.id} personaje={personajeEncontrado} />
            ) : null; 
          })}
        </div>
      )}
    </div>
  );
};
export default Favoritos;
