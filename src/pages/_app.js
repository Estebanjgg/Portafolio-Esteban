import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { ThemeModeProvider, useThemeMode } from '../theme';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function MyAppContent({ Component, pageProps }) {
  const { theme } = useThemeMode();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >        
        <Navbar />       
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Component {...pageProps} />
        </Box>       
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
export default function MyApp(props) {
  return (
    <ThemeModeProvider>
      <MyAppContent {...props} />
    </ThemeModeProvider>
  );
}
