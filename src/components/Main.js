import React, { useState } from 'react';
import '../styles/Header.css';
import Navbar from './Navbar';
import Header from './Header';
import Section from './Section';
import Footer from './Footer';



function Main() {
 
    const [currentPage, setCurrentPage] = useState('About');
    const pageHandler = (page) =>{
      if(currentPage !== page){
      setCurrentPage(page.page);
    }
  }
    
  return (
    <main >
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
