import { createTheme } from '@mui/material/styles';

const lightThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#3F51B5', // Azul suave y profesional
    },
    secondary: {
      main: '#FF4081', // Rosa para acentos llamativos
    },
    background: {
      default: '#F5F5F5', // Fondo claro pero no blanco puro
      paper: '#FFFFFF', // Para tarjetas y secciones elevadas
    },
    text: {
      primary: '#333333', // Texto oscuro para buena legibilidad
      secondary: '#555555', // Texto secundario más sutil
    },
  },
  typography: {
    fontFamily: ['Roboto', 'Poppins', 'sans-serif'].join(','), // Manteniendo consistencia moderna
    h1: { fontSize: '2.8rem', fontWeight: 700, color: '#3F51B5' },
    h2: { fontSize: '2.4rem', fontWeight: 700 },
    h3: { fontSize: '2rem', fontWeight: 600 },
    body1: { fontSize: '1rem', lineHeight: 1.7 },
    body2: { fontSize: '0.9rem', lineHeight: 1.6, color: '#555555' },
  },
  shape: {
    borderRadius: 8, // Menos redondeado que el tema oscuro, pero sigue siendo moderno
  },
  shadows: ['none', '0px 4px 8px rgba(0,0,0,0.1)'], // Sombras ligeras para un diseño limpio
};

export default createTheme(lightThemeOptions);
