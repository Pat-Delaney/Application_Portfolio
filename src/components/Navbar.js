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
const pageTabs = [
  'About', 'Portfolio', 'Resume', 'Contact'
]
function Navbar({ currentPage, pageHandler }) {
  
  anime({
    targets: '.nav-item',
    direction: 'reverse',
    translateX: 270,
    delay: anime.stagger(100) // increase delay by 100ms for each elements.
  });
  var animation =
  anime({
    targets: 'section',
    translateY: [-50, 0],
    opacity: [0, 1],
    delay: 10,
    duration: 1000
  });

  async function changePage(page){
    if(currentPage !== page.page){
      animation.reverse();
      animation.finished.then(pageHandler(page))
      animation.play();
  }
}

  return (
    <nav style={styles.navbarStyle} className="navbar">
      <ul style={styles.listStyle} className="nav nav-tabs">
    {pageTabs.map(page => (
   <li  key={page} className="nav-item">
      <button
      onClick={() => changePage({page})}
      className={currentPage === {page} ? 'nav-link active' : 'nav-link'}
    >
      {page}
    </button>
    </li>
    ))}
    </ul>
    </nav>
  );
}

export default Navbar;
