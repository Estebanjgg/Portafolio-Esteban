import { createTheme } from '@mui/material/styles';

const darkThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#BB86FC', // Púrpura vibrante, moderno y relajante para un tema oscuro
    },
    secondary: {
      main: '#03DAC6', // Verde azulado, contraste moderno
    },
    background: {
      default: '#121212', // Fondo oscuro moderno
      paper: '#1E1E1E', // Para tarjetas y secciones elevadas
    },
    text: {
      primary: '#E1E1E1', // Texto claro, no blanco puro para reducir el brillo
      secondary: '#A1A1A1', // Texto secundario más sutil
    },
  },
  typography: {
    fontFamily: ['Roboto', 'Poppins', 'sans-serif'].join(','), // Tipografía moderna y legible
    h1: { fontSize: '2.8rem', fontWeight: 700, color: '#BB86FC' },
    h2: { fontSize: '2.4rem', fontWeight: 700 },
    h3: { fontSize: '2rem', fontWeight: 600 },
    body1: { fontSize: '1rem', lineHeight: 1.7 },
    body2: { fontSize: '0.9rem', lineHeight: 1.6, color: '#A1A1A1' },
  },
  shape: {
    borderRadius: 12, // Esquinas más redondeadas para un diseño más amigable
  },
  shadows: ['none', '0px 2px 4px rgba(0,0,0,0.2)'], // Sombras sutiles
};

export default createTheme(darkThemeOptions);
