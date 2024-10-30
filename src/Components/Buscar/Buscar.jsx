import React, { useState } from 'react';
import { TextField, Box, Typography, Grid } from '@mui/material';
import ActionAreaCard from '/src/Components/ActionAreaCard/ActionAreaCard'; 
import "./Buscar.css";
function Buscar({ personajes }) {
  const [texto, setTexto] = useState('');
  const [filtro, setFiltro] = useState(personajes);
  const filtrar = (nuevoTexto) => {
    const filtrados = personajes.filter(personaje =>
      personaje.name.toLowerCase().includes(nuevoTexto.toLowerCase())
    );
    setFiltro(filtrados);
  };
  const manejarCambio = (e) => {
    const nuevoTexto = e.target.value;
    setTexto(nuevoTexto);
    filtrar(nuevoTexto);
  };
  return (
    <Box  sx={{padding: 3,  borderRadius: '8px', maxWidth: '600px', margin: 'auto', marginTop: '20px' }}>
      <Typography variant="h4" component="h2" sx={{ color: '#FFA500', marginBottom: '20px', textAlign: 'center', fontFamily: '"Ninja Naruto", monospace', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>
        Buscar Personajes
      </Typography>
      <TextField
        label="Ingrese el nombre del personaje"
        variant="outlined"
        fullWidth
        value={texto}
        onChange={manejarCambio}
        sx={{ 
          marginBottom: '20px', 
          '& .MuiOutlinedInput-root': { 
            '& fieldset': { 
              borderColor: '#FFA500' 
            }, 
            '&:hover fieldset': { 
              borderColor: '#FFA500' 
            },
            '&.Mui-focused fieldset': {
              borderColor: '#FFD700', 
            },
          },
          '& .MuiInputLabel-root': {
            color: '#FFA500', 
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: '#FFD700',
          },
        }}
      />
    <Grid container spacing={2}>
    {texto !== '' ? (
        filtro.map((personaje) => (
        <Grid item xs={12} sm={6} md={4} key={personaje.id}>
            <ActionAreaCard personaje={personaje} />
        </Grid>
        ))
    ) : (
        <Typography variant="h6" sx={{ color: '#FFA500', textAlign: 'center', width: '100%' }}>
            
        </Typography>
    )}
    </Grid>
    </Box>
  );
}
export default Buscar;
