import React from 'react';
import '../../styles/Section.css'
const styles = {
  textStyle:{
    textIndent: "25px",
    fontSize: '10px',
    textAlign: 'center'
  },
  pictureStyle:{
    objectFit: 'cover',
    maxWidth: '300px',
    borderRadius: '50px',
    zIndex:'1',
    margin: '30px',
    left: '30vw',
    float: 'left'
  },
  titleStyle:{
    textAlign: 'center',
  }
};

export default function AboutMe() {
  return (
    <div className='AboutMe'>
    <img style={styles.pictureStyle} id="patrick_img" src='./assets/patrick.jpg' alt="Headshot of Patrick Delaney"/>
    <h2 style={styles.titleStyle}>About Me</h2>
    <p style={styles.textStyle}>I am a dedicated and experienced full stack developer with a background in media and visual arts. I am currently enrolled in the University of Washington's coding bootcamp course. I am experienced HTML, CSS, JavaScript, JQuery, Express.js, React.js, Node.js, progressive web apps, agile methodology, computer science, database theory, MongoDB, MySQL and Git. I have a Bachelor's degree in Medi and Visual Arts from the Evergreen State College. </p><br/>
    <br/><p style={styles.textStyle}> I am very engaged with learning the ways that technology can and does effect our everyday modern lives and how the next generation of programmers can create more powerful and accessable ways to connect people. I thrive in engaging and fast paced environments which challenge me. My history in production and manufacturing lends me a result focused approach which demands a high level of detail work.</p>
    <div id="about_links">
        <a href="https://github.com/Pat-Delaney" target="_blank" class="card-link"><i class="fab fa-github"></i></a>
        <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="HORIZONTAL" data-vanity="delaney-pat" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/delaney-pat?trk=profile-badge"><i class="fab fa-linkedin"></i></a></div>
        <a href="mailto: pdelaney@outlook.com" class="card-link"><i class="fas fa-envelope"></i></a>
    </div>
    </div>
  );
}
