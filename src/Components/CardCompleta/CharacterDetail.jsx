import React, { useState, useEffect } from 'react';
import './CharacterDetail.css';
import { useParams } from 'react-router-dom';
import { collection, addDoc, deleteDoc, getDocs } from "firebase/firestore";
import { db } from "/src/credenciales.js";
const CharacterDetail = ({ personajes }) => {
  const { id } = useParams();
  const personaje = personajes.find((p) => p.id === parseInt(id));
  const [mainImage, setMainImage] = useState('');
  const [esFavorito, setEsFavorito] = useState(false);
  const [cargando, setCargando] = useState(false); 
  useEffect(() => {
    if (personaje) {
      setMainImage(personaje.images[0] || ''); 
      verificarFavorito();
    }
  }, [personaje]); 
  const verificarFavorito = async () => {
    const favoritosRef = collection(db, "Personaje");
    const snapshot = await getDocs(favoritosRef);
    const favoritos = snapshot.docs.map(doc => doc.data().id);
    if (personaje && favoritos.includes(personaje.id)) {
      setEsFavorito(true);
    }
  };
  const manejarToggleFavorito = async () => {
    if (!personaje) return; 
    const refDoc = collection(db, "Personaje");
    setCargando(true);
    if (esFavorito) {
      const snapshot = await getDocs(refDoc);
      const docToDelete = snapshot.docs.find(doc => doc.data().id === personaje.id);
      if (docToDelete) {
        await deleteDoc(docToDelete.ref);
        setEsFavorito(false);
        alert(`${personaje.name} ha sido eliminado de tus favoritos.`);
      }
    } else {
      await addDoc(refDoc, { 
        id: personaje.id
      });
      setEsFavorito(true);
      alert(`${personaje.name} ha sido agregado a tus favoritos.`);
    }
    setCargando(false); 
  };
  if (!personaje) return <div>Personaje no encontrado</div>;
  return (
    <div className="character-card">
      <div className="character-header">
        <h1 className="character-name">{personaje.name}</h1>
        <label className="favorite-checkbox">
          <input 
            type="checkbox" 
            checked={esFavorito} 
            onChange={manejarToggleFavorito} 
            disabled={cargando} 
          />
          <span className="custom-checkbox"></span>
          {esFavorito ? 'Quitar de Favoritos' : 'Agregar a Favoritos'}
        </label>
      </div>
      <div className="character-images">
        {mainImage && <img src={mainImage} alt={personaje.name} className="main-image" />}
        <div className="thumbnail-container">
          {personaje.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${personaje.name} - ${index + 1}`}
              className="thumbnail"
              onClick={() => setMainImage(img)}
            />
          ))}
        </div>
      </div>
      <div className="character-info">
        <p><strong>Fecha de nacimiento:</strong> {personaje.personal?.birthdate || 'N/A'}</p>
        <p><strong>Sexo:</strong> {personaje.personal?.sex || 'N/A'}</p>
        <p><strong>Clan:</strong> {personaje.personal?.clan || 'N/A'}</p>
        <h3>Jutsus</h3>
        <ul className="character-list">
          {personaje.jutsu?.map((jutsu, index) => (
            <li key={index}>{jutsu}</li>
          )) || <li>N/A</li>}
        </ul>
        <h3>Tipos de Naturaleza</h3>
        <ul className="character-list">
          {personaje.natureType?.map((type, index) => (
            <li key={index}>{type}</li>
          )) || <li>N/A</li>}
        </ul>
        <h3>Herramientas</h3>
        <ul className="character-list">
          {personaje.tools?.map((tool, index) => (
            <li key={index}>{tool}</li>
          )) || <li>N/A</li>}
        </ul>
      </div>
    </div>
  );
};
export default CharacterDetail;
