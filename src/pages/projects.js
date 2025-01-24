import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Tooltip,
  CircularProgress,
} from "@mui/material";
import { Star as StarIcon } from "@mui/icons-material";
import axios from "axios";

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const username = "Estebanjgg";
  const desiredRepos = [
    "biblioteca-online",
    "API-StarWars",
    "To-Do-list-Time-10",
    "prayer-calendar",
    "conta-hogar",
    "EstebanPortafolio",
    "generador-citas-naruto",
  ];
  
  const languageIconMap = {
    JavaScript: "/icons/javascript.png",
    Python: "/icons/python.png",
    CSS: "/icons/css.png",
    HTML: "/icons/html.png",
    TypeScript: "/icons/typescript.png",
    Java: "/icons/java.png",
    C: "/icons/c.png",
    "C++": "/icons/cplusplus.png",
    PHP: "/icons/php.png",
    Ruby: "/icons/ruby.png",
    Go: "/icons/go.png",
    Kotlin: "/icons/kotlin.png",
    Swift: "/icons/swift.png",
    Rust: "/icons/rust.png",
    Shell: "/icons/shell.png",
  };

  useEffect(() => {
    const fetchGitHubRepos = async () => {
      try {
        const cachedRepos = localStorage.getItem("github_repos");
        const cacheTimestamp = localStorage.getItem("github_repos_timestamp");

        const isCacheValid =
          cacheTimestamp && Date.now() - parseInt(cacheTimestamp, 10) < 3600000;

        if (cachedRepos && isCacheValid) {
          console.log("Usando datos en caché...");
          const reposData = JSON.parse(cachedRepos);
          const filteredRepos = reposData.filter((repo) =>
            desiredRepos.includes(repo.name)
          );
          setRepos(filteredRepos);
          setLoading(false);
          return;
        }

        console.log("Cargando datos desde la API...");
        const headers = {
          Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
        };

        const response = await axios.get(
          `https://api.github.com/users/${username}/repos`,
          { headers }
        );

        const reposWithLanguages = await Promise.all(
          response.data.map(async (repo) => {
            try {
              const languagesResponse = await axios.get(repo.languages_url, {
                headers,
              });
              return {
                ...repo,
                languages: Object.keys(languagesResponse.data),
              };
            } catch {
              return {
                ...repo,
                languages: [],
              };
            }
          })
        );

        localStorage.setItem(
          "github_repos",
          JSON.stringify(reposWithLanguages)
        );
        localStorage.setItem("github_repos_timestamp", Date.now());

        const filteredRepos = reposWithLanguages.filter((repo) =>
          desiredRepos.includes(repo.name)
        );

        setRepos(filteredRepos);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener repositorios:", error);
        setError(true);
        setLoading(false);
      }
    };

    if (loading) {
      fetchGitHubRepos();
    }
  }, [loading, username, desiredRepos]);

  return (
    <Box p={4}>
      <Typography variant="h2" gutterBottom textAlign="center">
        Mis Proyectos
      </Typography>

      {loading && (
        <Box textAlign="center" mt={4}>
          <CircularProgress />
          <Typography variant="body1" mt={2}>
            Cargando repositorios...
          </Typography>
        </Box>
      )}

      {error && (
        <Box textAlign="center" mt={4}>
          <Typography variant="body1" color="error">
            Hubo un problema al cargar los repositorios. Inténtalo más tarde.
          </Typography>
        </Box>
      )}

      {!loading && !error && repos.length === 0 && (
        <Box textAlign="center" mt={4}>
          <Typography variant="body1" color="textSecondary">
            No se encontraron repositorios que coincidan con los criterios especificados.
          </Typography>
        </Box>
      )}

      {!loading && !error && repos.length > 0 && (
        <Grid container spacing={4}>
          {repos.map((repo) => (
            <Grid item xs={12} sm={6} md={4} key={repo.id}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: 3,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: 6,
                  },
                }}
              >
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {repo.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" gutterBottom>
                    {repo.description || "Sin descripción disponible."}
                  </Typography>
                  <Box sx={{ mt: 2, display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {repo.languages &&
                      repo.languages.map((language) => (
                        <Chip
                          key={language}
                          label={language}
                          icon={
                            languageIconMap[language] ? (
                              <img
                                src={languageIconMap[language]}
                                alt={language}
                                style={{
                                  width: 24,
                                  height: 24,
                                }}
                              />
                            ) : null
                          }
                          sx={{
                            backgroundColor: "#f5f5f5",
                            color: "#333",
                            fontWeight: "bold",
                          }}
                        />
                      ))}
                  </Box>
                </CardContent>
                <CardActions
                  sx={{ mt: "auto", justifyContent: "space-between" }}
                >
                  <Tooltip title="Estrellas en GitHub">
                    <Box display="flex" alignItems="center" gap={1}>
                      <StarIcon fontSize="small" />
                      <Typography>{repo.stargazers_count || 0}</Typography>
                    </Box>
                  </Tooltip>
                  <Box>
                    <Button
                      variant="contained"
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver Repositorio
                    </Button>
                    {repo.homepage && (
                      <Button
                        variant="outlined"
                        color="secondary"
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ver Deploy
                      </Button>
                    )}
                  </Box>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}
