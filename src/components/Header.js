import React from 'react';
import Title from './Title';
import '../styles/Header.css';
import '../title.svg';
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
      <Title/>
      <p style={styles.captionStyle}>Web Development, Media, Visual Arts</p>
      </div>
  );
}

export default Header;
