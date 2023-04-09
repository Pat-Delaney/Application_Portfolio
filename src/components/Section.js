import React, { useState } from 'react';
import '../styles/Section.css';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

const styles = {
  bodyStyles: {
    
  },
};
const projects = [
  {
    id: '1',
    name: "Bargain Bin Electronics",
    desc: "Developed using Node.js, Express.js, Sequelize, and MySQL, modeling an online marketplace.",
    github:"https://github.com/Pat-Delaney/bargain-bin-electronics",
    deployed:"https://bargain-bin-electronics.herokuapp.com/",
    imgsrc:"./assets/bargain-bin.jpg"
  },
  {
    id: '2',
    name: "Worldwide News",
    desc: "Developed using Jquery, Materialize CSS library and third party APIs Current and Gnews, modeling a news dashboard.",
    github:"https://github.com/Pat-Delaney/worldwidenews",
    deployed:"https://pat-delaney.github.io/worldwidenews/",
    imgsrc:"./assets/worldwidenews.jpg"
  },
  {
    id: '3',
    name: "Just Another Text Editor",
    desc: "Developed using Node.js, OpenDB, Webpack, Babel, Code Mirror, and Express.js, this PWA fuctions as a simple text editor.",
    github:"https://github.com/Pat-Delaney/text_editor",
    deployed:"https://text-editor42.herokuapp.com/",
    imgsrc:"./assets/jate.png"
  },
  {
    id: '4',
    name: "Work Scheduler",
    desc: "Developed using bootstrap, day.js and jquery, models a scheduling app.",
    github:"https://github.com/Pat-Delaney/work_scheduler",
    deployed:"https://pat-delaney.github.io/work_scheduler/",
    imgsrc:"./assets/workscheduler.jpg"
  },
  {
    id: '5',
    name: "Weather Dashboard",
    desc: "Developed using Jquery, Bootstrap and Third Party API OpenWeather, modeling a weather dashboard.",
    github:"https://github.com/Pat-Delaney/weather_dashboard",
    deployed:"https://pat-delaney.github.io/weather_dashboard/",
    imgsrc:"./assets/weather-dashboard.jpg"
  },
  {
    id: '6',
    name: "Password Generator",
    desc: "Developed using HTML, Javascript and CSS, one of my first web development projects.",
    github:"https://github.com/Pat-Delaney/password_generator",
    deployed:"https://pat-delaney.github.io/password_generator/",
    imgsrc:"./assets/passwordGenerator.jpg"
  }
];

export default function Section({ currentPage, pageHandler }) {

  const renderPage = () => {
    if (currentPage === 'Portfolio') {
      return <Portfolio projects={projects}/>;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };


  return (
    <section style={styles.bodyStyles} className="section">
      {renderPage()}
    </section>
  );
}
