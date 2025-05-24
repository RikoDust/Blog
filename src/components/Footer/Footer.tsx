import { Link } from 'react-router-dom';

import './Footer.css';



const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-column">
          <h3>Informations</h3>
          <p>Emeric Pataut</p>
          <p>Développeur Web</p>
          <p>
            <Link to="/mentions-legales">Mentions légales</Link>
          </p>
        </div>

        <div className="footer-column">
          <h3>Liens / Contact</h3>
          <p>
            <a href="mailto:emeric.pataut@gmail.com">emeric.pataut@gmail.com</a>
          </p>
          <p>
            <a href="https://www.epataut.fr/" target="_blank" rel="noopener noreferrer">
              Lien vers Portfolio
            </a>
          </p>
          <p>
            <a
              href="https://www.linkedin.com/in/emeric-pataut/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fa-brands fa-linkedin"></i> LinkedIn
            </a>
          </p>
          <p>
            <a
              href="https://github.com/RikoDust?tab=overview&from=2025-05-01&to=2025-05-22"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="fa-brands fa-github"></i> GitHub
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};



export default Footer;