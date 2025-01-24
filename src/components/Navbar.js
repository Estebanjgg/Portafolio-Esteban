import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { LightMode, DarkMode, Download as DownloadIcon, Menu as MenuIcon } from "@mui/icons-material";
import { useThemeMode } from "../theme"; 
import { useState } from "react";

export default function Navbar() {
  const { mode, toggleTheme } = useThemeMode();
  const [anchorEl, setAnchorEl] = useState(null); 
  const open = Boolean(anchorEl);

  // Manejo del menú en móviles
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: mode === "dark" ? "#1a1a1a" : "#fff",
        color: mode === "dark" ? "#fff" : "#000",
      }}
    >
      <Toolbar>        
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontWeight: "bold",
            textTransform: "none",
            cursor: "pointer",
          }}
        >
          Mi Portafolio
        </Typography>
        
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          <Button color="inherit" href="#about">
            Sobre mí
          </Button>
          <Button color="inherit" href="#courses">
            Cursos
          </Button>
          <Button color="inherit" href="#projects">
            Proyectos
          </Button>
          <Button color="inherit" href="#contact">
            Contacto
          </Button>
          <Button
            href="/cv.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            startIcon={<DownloadIcon />}
            sx={{
              textTransform: "none",
              backgroundColor: "#007bff",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#0056b3",
                transform: "scale(1.05)",
              },
              transition: "all 0.3s ease",
              boxShadow: 3,
            }}
          >
            Descargar CV
          </Button>
        </Box>
        
        <IconButton
          color="inherit"
          onClick={toggleTheme}
          sx={{ ml: { xs: 1, md: 2 } }}
        >
          {mode === "dark" ? <LightMode /> : <DarkMode />}
        </IconButton>
        
        <IconButton
          color="inherit"
          sx={{ display: { xs: "block", md: "none" } }}
          onClick={handleMenuOpen}
        >
          <MenuIcon />
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <MenuItem onClick={handleMenuClose} component="a" href="#about">
            Sobre mí
          </MenuItem>
          <MenuItem onClick={handleMenuClose} component="a" href="#courses">
            Cursos
          </MenuItem>
          <MenuItem onClick={handleMenuClose} component="a" href="#projects">
            Proyectos
          </MenuItem>
          <MenuItem onClick={handleMenuClose} component="a" href="#contact">
            Contacto
          </MenuItem>
          <MenuItem
            onClick={handleMenuClose}
            component="a"
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Descargar CV
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
