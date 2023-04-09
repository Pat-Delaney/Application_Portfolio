import React from 'react';
import '../styles/Footer.css';
const styles = {
        textStyle:{
          fontSize: '15px',
          textAlign: 'center',
          color: 'gray'
        },
        linkStyle:{
            textDecoration: 'none',
            color: 'grey',
        }
};



function Footer() {

  return (
      <footer style={styles.textStyle}>
      <hr/>
    Patrick Delaney 2023<br/>
    <a href="mailto: pdelaney@outlook.com" style={styles.linkStyle}>pdelaney@outlook.com</a> 
    <br/>References available upon request
    </footer>
  );
}

export default Footer;
