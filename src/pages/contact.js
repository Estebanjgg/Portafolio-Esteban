import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Snackbar,
  Alert,
  Grid,
  IconButton,
  Link,
} from '@mui/material';
import { Email, Phone, LocationOn, LinkedIn, GitHub } from '@mui/icons-material';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formValues, setFormValues] = useState({ name: '', email: '', message: '' });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [errorSnackbar, setErrorSnackbar] = useState(false);

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, 
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, 
        {
          name: formValues.name,
          email: formValues.email,
          message: formValues.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID 
      )
      .then(
        (response) => {
          console.log("Mensaje enviado:", response.status, response.text);
          setOpenSnackbar(true);
          setFormValues({ name: "", email: "", message: "" }); 
        },
        (error) => {
          console.error("Error al enviar el mensaje:", error);
          setErrorSnackbar(true);
        }
      );
  };
  

  return (
    <Box p={4}>
      <Typography variant="h2" gutterBottom textAlign="center">
        Contáctame
      </Typography>     
      <Grid container spacing={4} sx={{ mb: 4 }}>        
        <Grid item xs={12} sm={4} textAlign="center">
          <IconButton color="primary" sx={{ fontSize: '2rem' }}>
            <Email />
          </IconButton>
          <Typography variant="h6">Correo</Typography>
          <Typography variant="body2">esteban030994@gmail.com</Typography>
        </Grid>
        <Grid item xs={12} sm={4} textAlign="center">
          <IconButton color="primary" sx={{ fontSize: '2rem' }}>
            <Phone />
          </IconButton>
          <Typography variant="h6">Teléfono</Typography>
          <Typography variant="body2">+55 11 91860-7489</Typography>
        </Grid>
        <Grid item xs={12} sm={4} textAlign="center">
          <IconButton color="primary" sx={{ fontSize: '2rem' }}>
            <LocationOn />
          </IconButton>
          <Typography variant="h6">Ubicación</Typography>
          <Typography variant="body2">São Paulo, Bragança Paulista</Typography>
        </Grid>
      </Grid>
      
      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: 500,
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
        }}
      >
        <TextField
          label="Nombre"
          name="name"
          value={formValues.name}
          onChange={handleChange}
          fullWidth
          required
          variant="outlined"
        />
        <TextField
          label="Correo"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          fullWidth
          required
          type="email"
          variant="outlined"
        />
        <TextField
          label="Mensaje"
          name="message"
          value={formValues.message}
          onChange={handleChange}
          fullWidth
          required
          multiline
          rows={4}
          variant="outlined"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          sx={{
            alignSelf: 'center',
            width: '50%',
            transition: '0.3s',
            '&:hover': {
              transform: 'scale(1.05)',
              bgcolor: 'secondary.main',
            },
          }}
        >
          Enviar
        </Button>
      </form>      
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert
          severity="success"
          onClose={() => setOpenSnackbar(false)}
          sx={{ width: '100%' }}        >
          ¡Mensaje enviado con éxito!
        </Alert>
      </Snackbar>

      <Snackbar
        open={errorSnackbar}
        autoHideDuration={3000}
        onClose={() => setErrorSnackbar(false)}
      >
        <Alert
          severity="error"
          onClose={() => setErrorSnackbar(false)}
          sx={{ width: '100%' }}        >
          Ocurrió un error al enviar el mensaje. Inténtalo de nuevo.
        </Alert>
      </Snackbar>
    </Box>
  );
}
