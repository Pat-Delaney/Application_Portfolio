import React from 'react';
import '../styles/Navbar.css';
import anime from 'animejs/lib/anime.es.js';

const styles = {
  navbarStyle: {
    margin:'auto',
  },
  listStyle: {
    display: 'inline',
    margin:'auto'
  }
};

function Navbar({ currentPage, pageHandler }) {
  var animation =
  anime({
    targets: 'section',
    translateX: [-100, 0], // from 100 to 250
    delay: 10,
    duration: 1000
  });
  async function changePage(page){
      animation.reverse();
      animation.finished.then(pageHandler(page))
      animation.restart();
  }

  return (
    <nav style={styles.navbarStyle} className="navbar">
      <ul style={styles.listStyle} className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => changePage('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => changePage('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => changePage('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => changePage('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
    </nav>
  );
}

export default Navbar;
