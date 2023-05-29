import React from 'react';
const styles = {
  textStyle:{
    fontSize: "20px",

  },
  titleStyle:{
    textAlign: 'center',
    fontSize: '30px',
  },
  formStyle:{
    height:'200px'
  }
};
export default function Contact() {
  return (
    <div className='animate'>
      <h2 style={styles.titleStyle}>Contact me:</h2>
      <div id="contactInfo">
      <p style={styles.textStyle}>Phone: (914)787-0861</p>
      <p style={styles.textStyle}>Email: <a href="mailto: pdelaney@outlook.com" id="email_link">pdelaney@outlook.com</a>
    </p>
    </div>
    <div className="formContainer">
    <form action="mailto:pdelaney@outlook.com" method="GET">
    <label htmlFor="subject">Subject:</label>
    <input type="text" id="subject" name="subject" placeholder="Subject..."/>

    <label htmlFor="body">Message</label>
    <textarea id="body" name="body" placeholder="Write something.." style={styles.formStyle}></textarea>

    <input type="submit" value="Submit"/>

  </form>
</div> 
   
    </div>
  );
}
