import React from 'react';
import '../styles/Header.css';

const styles = {
  titleStyle: {
    textAlign: 'center',
  },
  captionStyle:{
    
  }
};



function Header() {

  return (
      <div  className="header" style={styles.titleStyle}>
      <h1>Patrick Delaney</h1>
      <p style={styles.captionStyle}>Web Development, Media, Visual Arts</p>
      <hr/>
      </div>
  );
}

export default Header;
