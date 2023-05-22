import React from 'react';

export default function Resume() {
  return (
    <div className='resumeContainer animate'>

        <div className="container">
        <div className='skillList'>
          <div className='skillItem'>Front End Web Development:<br/>
          <ul className="submenu">
          <li>React</li>
          <li>Handlebars</li>
          <li>HTML, CSS, JavaScript</li>
          <li>CSS libraries including Bootstrap and Materialize</li>
          </ul>
          </div>
          <div  className='skillItem'>Back End Web Development:<br/>
          <ul className="submenu">
            <li>MongoDB and Mongoose</li>
            <li>MySQL and Sequelize</li>
            <li>Node.Js</li>
            <li>Express.Js</li>
          </ul>
          </div>
          <div  className='skillItem'>Media and Visual Art:<br/>
          <ul className="submenu">
            <li>Adobe CC products including:
              <ul className='subsubmenu'>
                <li>Photoshop</li>
                <li>Premiere Pro</li>
                <li>Audition</li>
                <li>After Effects</li>
              </ul>
            </li>
            <li>3d Modeling and Sculpting using Blender and Nomad Sculpt</li>
            <li>Traditional and Digtal animation using DragonFrame and Adobe Premiere</li>

          </ul>
          </div>
        </div>
      </div>
      <div id='resume'>
      <a id="resume-link" target="_blank" rel='noreferrer'  href="https://docs.google.com/document/d/e/2PACX-1vRMOJ-QDqPnQ0bDgEZCmXmKdFkth5-FSGNOCe1UCyCYx8LHMT3dCPn1wG1ep9ZWwwvRCjbVPwAABR9_/pub">My Resume</a>
      <details>
      <summary>Expand to view</summary>
      <p><iframe title='resume' src="https://docs.google.com/document/d/e/2PACX-1vRMOJ-QDqPnQ0bDgEZCmXmKdFkth5-FSGNOCe1UCyCYx8LHMT3dCPn1wG1ep9ZWwwvRCjbVPwAABR9_/pub?embedded=true"></iframe></p>
      </details>
      </div>
    </div>

  );
}
