import React, { useState } from 'react';
import Navbar from './Navbar';
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
      <div id='title'>
        <h1  className='animatedTitle'>Patrick Delaney</h1>
        <p className='animatedTitle'>Web Development, Media, Visual Arts</p>
        </div>
        <Navbar currentPage={currentPage} pageHandler={pageHandler} />
    </header>
        <Section currentPage={currentPage} pageHandler={pageHandler} />
        <Footer />
    </main>
  );
}

export default Main;
