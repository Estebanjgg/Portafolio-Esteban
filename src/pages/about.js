import { Box, Typography, Button, Grid, Avatar, Chip, Divider } from '@mui/material';
import { Work, School, ContactMail } from '@mui/icons-material';
import {
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiPython,
  SiKotlin,
  SiMongodb,
  SiPostgresql,
  SiJavascript,
} from 'react-icons/si';

export default function About() {
  const skills = [
    { name: 'React', icon: <SiReact /> },
    { name: 'Next.js', icon: <SiNextdotjs /> },
    { name: 'Angular', icon: <SiAngular /> },
    { name: 'Python', icon: <SiPython /> },
    { name: 'Kotlin', icon: <SiKotlin /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'PostgreSQL', icon: <SiPostgresql /> },
    { name: 'JavaScript', icon: <SiJavascript /> },
  ];

  const softSkills = [
    'Trabajo en equipo',
    'Comunicación efectiva',
    'Adaptabilidad',
    'Resolución de problemas',
    'Creatividad',
  ];

  return (
    <Box p={4} sx={{ bgcolor: 'background.default', color: 'text.primary' }}>
      {/* Título de la sección */}
      <Typography variant="h2" gutterBottom textAlign="center">
        Sobre mí
      </Typography>

      {/* Resumen principal */}
      <Typography
        paragraph
        textAlign="center"
        sx={{ maxWidth: '800px', mx: 'auto', fontSize: '1.2rem', lineHeight: 1.6 }}
      >
        ¡Hola! Soy <b>Esteban José González Gómez</b>, desarrollador full-stack con más de 3 años de experiencia en 
        creación de aplicaciones web y plataformas escalables. Me especializo en el uso de tecnologías como <b>React, 
        Next.js, Python</b> y bases de datos como <b>MongoDB</b> y <b>PostgreSQL</b>. Estoy apasionado por la innovación 
        tecnológica y siempre en búsqueda de nuevos retos que me permitan crecer profesional y personalmente.
      </Typography>

      <Divider sx={{ my: 4 }} />

      {/* Experiencia */}
      <Typography variant="h5" gutterBottom textAlign="center">
        Experiencia
      </Typography>
      <Grid container spacing={4} sx={{ mt: 2 }}>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
            <Avatar sx={{ bgcolor: 'primary.main', width: 56, height: 56 }}>
              <Work fontSize="large" />
            </Avatar>
            <Box>
              <Typography variant="h6" gutterBottom>
                Ingeniero de Software JR - Neon
              </Typography>
              <Typography variant="body2" color="textSecondary">
                <i>febrero 2022 - presente</i>
              </Typography>
              <Typography paragraph sx={{ mt: 1 }}>
                Desarrollo de bots internos utilizando Python y MongoDB. Implementación de plataformas de votación con 
                <b> Next.js</b> y <b>Angular</b>. Gestión de bases de datos SQL y MongoDB para asegurar escalabilidad.
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
            <Avatar sx={{ bgcolor: 'secondary.main', width: 56, height: 56 }}>
              <Work fontSize="large" />
            </Avatar>
            <Box>
              <Typography variant="h6" gutterBottom>
                Responsable Logística - Boardriders
              </Typography>
              <Typography variant="body2" color="textSecondary">
                <i>octubre 2020 - febrero 2022</i>
              </Typography>
              <Typography paragraph sx={{ mt: 1 }}>
                Gestión de inventario y logística. Desarrollo de sistemas para control de inventarios utilizando 
                herramientas de automatización.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ my: 6 }} />

      {/* Educación */}
      <Typography variant="h5" gutterBottom textAlign="center">
        Educación
      </Typography>
      <Grid container spacing={4} sx={{ mt: 2 }}>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
            <Avatar sx={{ bgcolor: 'primary.light', width: 56, height: 56 }}>
              <School fontSize="large" />
            </Avatar>
            <Box>
              <Typography variant="h6" gutterBottom>
                Ingeniería de Software - Cruzeiro do Sul Virtual
              </Typography>
              <Typography variant="body2" color="textSecondary">
                <i>Estudio en curso (mayo 2024)</i>
              </Typography>
              <Typography paragraph sx={{ mt: 1 }}>
                Formación especializada en desarrollo de software, diseño de sistemas y tecnologías modernas.
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
            <Avatar sx={{ bgcolor: 'secondary.light', width: 56, height: 56 }}>
              <School fontSize="large" />
            </Avatar>
            <Box>
              <Typography variant="h6" gutterBottom>
                Administración Tributaria - IUTIRLA
              </Typography>
              <Typography variant="body2" color="textSecondary">
                <i>febrero 2012 - junio 2015</i>
              </Typography>
              <Typography paragraph sx={{ mt: 1 }}>
                Conocimiento avanzado en administración y contabilidad, aplicado a proyectos financieros.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ my: 6 }} />

      {/* Habilidades Técnicas */}
      <Typography variant="h5" textAlign="center" gutterBottom>
        Habilidades Técnicas
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 2,
          mt: 2,
        }}
      >
        {skills.map((skill) => (
          <Chip
            key={skill.name}
            label={skill.name}
            icon={skill.icon}
            variant="outlined"
            clickable
            sx={{
              fontSize: '1rem',
              transition: '0.3s',
              '&:hover': {
                bgcolor: 'primary.light',
                color: 'white',
                transform: 'scale(1.05)',
              },
            }}
          />
        ))}
      </Box>

      <Divider sx={{ my: 6 }} />

      {/* Soft Skills */}
      <Typography variant="h5" textAlign="center" gutterBottom>
        Soft Skills
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 2,
          mt: 2,
        }}
      >
        {softSkills.map((skill) => (
          <Chip
            key={skill}
            label={skill}
            variant="filled"
            sx={{
              fontSize: '1rem',
              transition: '0.3s',
              '&:hover': {
                bgcolor: 'secondary.light',
                color: 'white',
                transform: 'scale(1.05)',
              },
            }}
          />
        ))}
      </Box>

      <Divider sx={{ my: 6 }} />

      {/* Llamado a la Acción */}
      <Box textAlign="center">
        <Typography variant="h6" gutterBottom>
          ¿Interesado en colaborar o saber más sobre mi trabajo?
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<ContactMail />}
          href="#contact"
          sx={{
            textTransform: 'none',
            fontWeight: 'bold',
            px: 4,
            py: 1.5,
            fontSize: '1rem',
            transition: '0.3s',
            '&:hover': {
              bgcolor: 'secondary.main',
              transform: 'scale(1.1)',
            },
          }}
        >
          Contáctame
        </Button>
      </Box>
    </Box>
  );
}
