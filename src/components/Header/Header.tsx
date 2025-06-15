import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/useThem';

import './Header.css';




const Header = () => {
  // Récupération du thème actuel et de la fonction basculer
  const { toggleTheme, theme } = useTheme();

  // Premier useEffect : gérer le clic sur le bouton de changement de thème
  useEffect(() => {
    const themeBtn = document.getElementById('toggle-theme');
    // Fonction déclenchée au clic
    const handleClick = () => {
      toggleTheme(); 
    };
    // Ajouter l'écouteur d'événement si le bouton existe
    if (themeBtn) {
      themeBtn.addEventListener('click', handleClick);
    }


    return () => {
      if (themeBtn) {
        themeBtn.removeEventListener('click', handleClick);
      }
    };
  }, [toggleTheme]);

  // Deuxième useEffect : mettre à jour l’icône selon thème actif
  useEffect(() => {
    const icon = document.querySelector('#toggle-theme i');
    if (icon) {
      // Change la classe de l’icône : thème sombre, thème clair
      icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
  }, [theme]);





  return (
    <header className="navbar">
      <div className="nav-left">
        <Link className="nav-link" to="/">Accueil Blog</Link>
        <a
          href="https://www.epataut.fr/"
          className="nav-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lien vers Portfolio
        </a>
      </div>

      <div className="nav-right">
        <button aria-label='Bouton dark mode' id="toggle-theme">
          <i className="fas fa-moon"></i>
        </button>
      </div>
    </header>
  );
};






export default Header;