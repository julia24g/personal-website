import React from 'react';
import { Linkedin, Github, EnvelopeAtFill } from 'react-bootstrap-icons';

const Introduction = () => (
  <div className="col-4 intro">
    <img id="memoji" src="/images/memoji.png" alt="Memoji of Julia" className="img-responsive" width="200" height="200" />
    <div className="words">
      <h1>Hello!</h1>
      <h1>I'm Julia</h1>
      <div>
        <a className="icon" href="https://www.linkedin.com/in/juliagroza/" target="_blank" rel="noopener noreferrer">
          <Linkedin size={20} color="white" />
        </a>
        <a className="icon" href="https://github.com/julia24g" target="_blank" rel="noopener noreferrer">
          <Github size={20} color="white" />
        </a>
        <a className="icon" href="mailto:jgroza24@gmail.com" target="_blank" rel="noopener noreferrer">
          <EnvelopeAtFill size={20} color="white" />
        </a>
        <a href="https://drive.google.com/file/d/1UnPPliUsqY5ke9eaA6l5olBylO8zmvc1/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
      </div>
    </div>
    <div>
    </div>
  </div>
);

export default Introduction;
