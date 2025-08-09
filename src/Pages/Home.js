import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GithubIcon from '@material-ui/icons/GitHub';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My name is Shrikant</h2>
        <div className="prompt"><p> A Software developer for learning New Skills and creating Applications.</p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      <div classname="skills">
        <h1> Skills </h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS, NPM, YARN, MaterialUI, Bootstrap
            </span>
          </li>
          <li className="item">
            <h2> Back-End</h2>
            <span>
              NodeJS, ExpressJS, MongoDB, MySQL, AWS(S3, Lambda, LightSail, EC2) 
            </span>
          </li>
          <li className="item">
            <h2> Languages</h2>
            <span>
              JavaScript, TypeScript, Python
            </span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home;