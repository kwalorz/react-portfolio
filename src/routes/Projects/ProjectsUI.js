import React, { useState } from 'react';
import projectSrc from './ProjectSrc';
import './Projects.css';
import Card from '../../components/Cards/Cards';
import Button from '../../components/Button/Button';

const Projects = () => {
  const [expandCard1, setCard1] = useState(false);
  const [expandCard2, setCard2] = useState(false);
  const [expandCard3, setCard3] = useState(false);

  const stateArray = [expandCard1, expandCard2, expandCard3];

  const openProject = (e) => {
    if (e.target.classList.contains('project-btn-1')) setCard1((prev) => !prev);
    if (e.target.classList.contains('project-btn-2')) setCard2((prev) => !prev);
    if (e.target.classList.contains('project-btn-3')) setCard3((prev) => !prev);
  };

  return (
    <div id='projects-section'>
      <div className='waves layer-top'></div>
      <div className='waves layer-bottom'></div>
      <div className='projects-content'>
        {projectSrc.map((project, index) => {
          return (
            <Card
              key={`project-${index + 1}`}
              delay={index}
              imgSrc={project.projImg.imgSrc}
              imgWidth={project.projImg.width}
              altText={project.projImg.altText}
              title={project.projTitle}
              description={project.projDescription}
            >
              {project.projButtons.map((btn, index) => {
                return (
                  <Button
                    key={`project-btn-${index}`}
                    label={btn.label}
                    link={btn.link}
                  />
                );
              })}
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
