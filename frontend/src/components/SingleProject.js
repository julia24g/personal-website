import React from "react";
import { Github, TrophyFill } from 'react-bootstrap-icons';

const SingleProject = ({ project }) => (
    <div className="transbox">
        <section>
            <h4>{project.title}</h4>
            <div id="project-git">
                {project.repo}
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github size={26} color="black" />
                </a>
            </div>
            <div className="single-award">
                <a className="awardicon" href={project.devpost} target="_blank" rel="noopener noreferrer">
                    <TrophyFill size={16} />
                    {project.award}
                </a>
            </div>
            {project.languages.map((language) => (
                <div className={`${language} language`}>{language}</div>
            ))}
            <p>{project.description}</p>
        </section>
    </div>
);

export default SingleProject;