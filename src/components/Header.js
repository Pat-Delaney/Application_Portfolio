import React from 'react';
import Title from './Title';
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
      <Title/>
      </div>
  );
}

export default Header;
