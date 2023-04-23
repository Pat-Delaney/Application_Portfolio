import React, { useState } from 'react';
import '../styles/Header.css';
import Navbar from './Navbar';
import Header from './Header';
import Section from './Section';
import Footer from './Footer'
const styles = {
 
};



function Main() {
    const [currentPage, setCurrentPage] = useState('About');
    const pageHandler = (page) => setCurrentPage(page);

  return (
    <main>
      <div id="backgroundimages">
        <img id='image1' src='./assets/background2.png' alt='background 2'></img>
        <img id='image2' src='./assets/background3.png' alt='background 3'></img>
      </div>
    <header>
        <Header />
        <Navbar currentPage={currentPage} pageHandler={pageHandler} />
    </header>
        <Section currentPage={currentPage} pageHandler={pageHandler} />
        <Footer />
    </main>
  );
}

export default Main;
