import React, { useState } from 'react';
import '../styles/Section.css';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

const styles = {
  bodyStyles: {
    
  },
};


export default function Section({ currentPage, pageHandler }) {

  const renderPage = () => {
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };


  return (
    <section style={styles.bodyStyles} className="section">
      {renderPage()}
    </section>
  );
}
