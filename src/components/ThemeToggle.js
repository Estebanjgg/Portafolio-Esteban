import { IconButton } from '@mui/material';
import { LightMode, DarkMode } from '@mui/icons-material';
import { useThemeMode } from '../theme';

export default function ThemeToggle() {
  const { mode, toggleTheme } = useThemeMode();

  return (
    <IconButton color="inherit" onClick={toggleTheme}>
      {mode === 'dark' ? <LightMode /> : <DarkMode />}
    </IconButton>
  );
}
