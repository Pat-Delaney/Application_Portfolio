import React from 'react';
import '../styles/Footer.css';
const styles = {
        textStyle:{
          fontSize: '15px',
          textAlign: 'center',

        },
        linkStyle:{
            backgroundColor: 'none',
            color:'grey',
            display:'flex',
            flexDirection:'row',
            margin:'auto'
          }
};



function Footer() {

  return (
      <footer style={styles.textStyle}>

    Patrick Delaney 2023<br/>
    <div style={styles.linkStyle} id="footer_links">
        <a href="https://github.com/Pat-Delaney" target="_blank" className="card-link"><i className="fab fa-github"></i></a>
        <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="HORIZONTAL" data-vanity="delaney-pat" data-version="v1"><a className="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/delaney-pat?trk=profile-badge"><i className="fab fa-linkedin"></i></a></div>
        <a href="mailto: pdelaney@outlook.com" className="card-link"><i className="fas fa-envelope"></i></a>
    </div>
    </footer>
  );
}

export default Footer;
