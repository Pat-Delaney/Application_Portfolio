import React from 'react';
const styles = {
  titleStyle:{
    textAlign:'center',
  },
  cardStyle:{
    maxWidth: '100',
    textAlign:'center',
    borderRadius:'1rem'
  },
  imageStyle:{
    maxWidth:"100%",
    borderRadius:'1rem'
  },
  linkStyle:{
    margin: '5px',
    backgroundColor: 'none',
    color:'black',
  }
};
export default function Portfolio(props) {
  return (
    <div className='portfolioContainer'>
      <h2 style={styles.titleStyle}>My Work</h2>
      <div id="projects">
      {props.projects.map(project => (
        <div className="card projectCard" style={styles.cardStyle} key={project.id}>
         <img style={styles.imageStyle} className="card-img-top" src={project.imgsrc} alt="Deployed web app"/>
          <div className="card-body">
            <h5 className="card-title">{project.name}</h5>
            <p className="card-text">{project.desc}</p>
            <div className='projectLinks'>
            <a style={styles.linkStyle} href={project.github} className="card-link"><i className="fab fa-github"></i></a>
            <a style={styles.linkStyle} href={project.deployed} className="card-link"><i className="fas fa-globe"></i></a>
            </div>
          
        </div>
      </div>
      ))}
      </div>
    </div>
  );
}
