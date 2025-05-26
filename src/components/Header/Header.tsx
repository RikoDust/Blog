import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/useThem';

import './Header.css';

const Header = () => {
  const { toggleTheme, theme } = useTheme();

  useEffect(() => {
    const themeBtn = document.getElementById('toggle-theme');

    const handleClick = () => {
      toggleTheme(); 
    };

    if (themeBtn) {
      themeBtn.addEventListener('click', handleClick);
    }

    return () => {
      if (themeBtn) {
        themeBtn.removeEventListener('click', handleClick);
      }
    };
  }, [toggleTheme]);

  useEffect(() => {
    const icon = document.querySelector('#toggle-theme i');
    if (icon) {
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
        <button id="toggle-theme">
          <i className="fas fa-moon"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;