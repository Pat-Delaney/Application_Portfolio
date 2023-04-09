import React from 'react';
const styles = {
  textStyle:{
    fontSize: "20px",
  },
  titleStyle:{
    textAlign: 'center',
    fontSize: '30px',
  }
};
export default function Contact() {
  return (
    <div>
      <h2 style={styles.titleStyle}>Contact me:</h2>
    <p style={styles.textStyle}>Phone: (914)787-0861<br/>
      Email: <a href="mailto: pdelaney@outlook.com" id="email_link">pdelaney@outlook.com</a>
    </p>
    </div>
  );
}
