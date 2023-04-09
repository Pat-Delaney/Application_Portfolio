import React from 'react';
import '../styles/Navbar.css';


const styles = {
  navbarStyle: {
    
  },
  listStyle: {
    display: 'inline'
  }
};

function Navbar({ currentPage, pageHandler }) {

  return (
    <nav style={styles.navbarStyle} className="navbar">
      <ul style={styles.listStyle} className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => pageHandler('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => pageHandler('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => pageHandler('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => pageHandler('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
    </ul>
    </nav>
  );
}

export default Navbar;
