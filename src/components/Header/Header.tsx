import './Header.css'



const Header = () => {
  return (
    <header className="navbar">
      <div className="nav-left">
        <a href="index.html">Accueil Blog</a>
        <a
          href="https://www.epataut.fr/"
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