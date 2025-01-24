import { Box, Typography, Container } from '@mui/material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 'auto',
        py: 3,
        textAlign: 'center',
        backgroundColor: 'background.default',
        color: 'text.secondary',
        width: '100%',
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" sx={{ fontSize: { xs: '0.8rem', sm: '1rem' } }}>
          © {new Date().getFullYear()} Portafolio Esteban GOnzalez. Todos los derechos reservados.
        </Typography>
        <Typography
          variant="body2"
          sx={{
            mt: 1,
            fontSize: { xs: '0.7rem', sm: '0.9rem' },
          }}
        >
          Diseñado con ❤️ usando React y Material-UI.
        </Typography>
      </Container>
    </Box>
  );
}
