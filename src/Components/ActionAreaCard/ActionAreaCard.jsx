import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Link } from 'react-router-dom'; 
export default function ActionAreaCard({ personaje }) {
  const images = personaje.images;
  return (
    <Card 
      sx={{ 
        maxWidth: 345,
        backgroundColor: 'rgba(43, 43, 43, 0.9)', 
        backdropFilter: 'blur(5px)', 
        border: '2px solid #FFA500',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)', 
        borderRadius: '10px', 
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'scale(1.05)', 
        }
      }}
    >
      <Link to={`/personaje/${personaje.id}`} style={{ textDecoration: 'none', color: 'inherit' }}> 
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={images[0]}
            alt={personaje.name} 
          />
          <CardContent sx={{ textAlign: 'center' }}>
            <Typography 
              gutterBottom 
              variant="h5" 
              component="div" 
              sx={{
                fontFamily: '"Ninja Naruto", monospace',
                color: '#FF4500',
                fontSize: '1.8rem',
                fontWeight: 'bold',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
              }}
            >
              {personaje.name}
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                color: '#FFD700', 
                marginBottom: 1,
                fontFamily: '"Ninja Naruto", monospace',
                fontSize: '1rem',
                fontWeight: 'bold'
              }}
            >
              <strong>Fecha de nacimiento:</strong> {personaje.personal.birthdate}
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                color: '#FFD700', 
                marginBottom: 1,
                fontFamily: '"Ninja Naruto", monospace',
                fontSize: '1rem',
                fontWeight: 'bold'
              }}
            >
              <strong>Sexo:</strong> {personaje.personal.sex}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}
