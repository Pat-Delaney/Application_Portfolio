import React from 'react';

export default function Resume() {
  return (
    <div className='resumeContainer'>
      <h2>My Experience</h2>
      <div>
        <h3>My skills:</h3>
        <div className="container">
        <ul className='skillList'>
          <li className='skillItem'>Front End Web Development:<br/>
          <ul className="submenu">
          <li>React</li>
          <li>Handlebars</li>
          <li>HTML, CSS, JavaScript</li>
          <li>CSS libraries including Bootstrap and Materialize</li>
          </ul>
          </li>
          <li  className='skillItem'>Back End Web Development:<br/>
          <ul className="submenu">
            <li>MongoDB and Mongoose</li>
            <li>MySQL and Sequelize</li>
            <li>Node.Js</li>
            <li>Express.Js</li>
          </ul>
          </li>
        </ul>
      </div>
    </div>
      <details>
<summary>Expand to view</summary>
<p><iframe  src="https://docs.google.com/document/d/e/2PACX-1vRMOJ-QDqPnQ0bDgEZCmXmKdFkth5-FSGNOCe1UCyCYx8LHMT3dCPn1wG1ep9ZWwwvRCjbVPwAABR9_/pub?embedded=true"></iframe></p>
</details>
      
      <a id="resume-link" target="_blank" class="nav-link" href="https://docs.google.com/document/d/e/2PACX-1vRMOJ-QDqPnQ0bDgEZCmXmKdFkth5-FSGNOCe1UCyCYx8LHMT3dCPn1wG1ep9ZWwwvRCjbVPwAABR9_/pub">My Resume</a>
    </div>
  );
}
