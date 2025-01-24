import { Box, Typography, Avatar, Grid, Card, CardContent, Button } from "@mui/material";
import Head from "next/head";
import Projects from "./projects";
import Contact from "./contact";
import Courses from "./courses";
import About from "./about"; // Importamos el componente About
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function HomePage() {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);

  const username = "Estebanjgg";

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const headers = {
          Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
        };

        const profileResponse = await axios.get(`https://api.github.com/users/${username}`, { headers });
        setProfile(profileResponse.data);

        const reposResponse = await axios.get(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`,
          { headers }
        );
        setRepos(reposResponse.data);
      } catch (error) {
        console.error("Error al obtener datos de GitHub:", error);
      }
    };

    fetchGitHubData();
  }, [username]);

  return (
    <>
      <Head>
        <title>Inicio - Mi Portafolio</title>
      </Head>

      {/* Sección de Presentación (Información de GitHub) */}
      <Box p={4} id="github" sx={{ marginBottom: "4rem" }}>
        {profile && (
          <Box textAlign="center" mb={4}>
            <Avatar
              src={profile.avatar_url}
              alt={profile.name}
              sx={{
                width: 250,
                height: 250,
                margin: "0 auto",
                boxShadow: 4,
              }}
            />
            <Typography variant="h1" mt={2} gutterBottom>
              ¡Hola, soy {profile.name}!
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              {profile.bio || "Desarrollador apasionado de la tecnología."}
            </Typography>
            <Typography variant="body2" mt={1}>
              Repositorios públicos: {profile.public_repos}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              href={profile.html_url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ mt: 2 }}
            >
              Ver Perfil en GitHub
            </Button>
          </Box>
        )}
      </Box>

      
      <Box id="about" p={4} sx={{ marginBottom: "4rem" }}>
        <About /> 
      </Box>
      
      <Box id="courses" p={4} sx={{ marginBottom: "4rem" }}>
        <Courses />
      </Box>
      
      <Box id="projects" p={4} sx={{ marginBottom: "4rem" }}>
        <Projects />
      </Box>
      
      <Box id="contact" p={4} sx={{ marginBottom: "4rem" }}>
        <Contact />
      </Box>
    </>
  );
}
