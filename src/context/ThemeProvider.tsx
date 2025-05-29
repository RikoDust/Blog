import { useEffect, useState } from 'react';
import { ThemeContext } from './ThemeContext';




// Composant ThemeProvider qui va envelopper l'application pour fournir le thème
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  // État local pour stocker le thème actuel
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Fonction pour basculer entre le thème clair et sombre
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // À chaque changement de thème, applique ou retire la classe 'dark-mode' sur le body
  useEffect(() => {
    document.body.classList.toggle('dark-mode', theme === 'dark');
  }, [theme]);




  return (
    // Fournit le contexte à tous les composants enfants
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

