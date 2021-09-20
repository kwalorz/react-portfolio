import React from 'react';
import projectSrc from './ProjectSrc';
import './Projects.css';
import Card from '../../components/Cards/Cards';
import Button from '../../components/Button/Button';

const Projects = () => {
  return (
    <div id='projects-section'>
      <div className='waves layer-top'></div>
      <div className='waves layer-bottom'></div>
      <div className='projects-content'>
        {projectSrc.map((project, index) => (
          <Card
            key={`project-${index}`}
            imgSrc={project.projImg.imgSrc}
            altText={project.projImg.altText}
            title={project.projTitle}
            description={project.projDescription}
          >
            {project.projButtons.map((btn, index) => {
              return (
                <Button
                  key={index}
                  label={btn.label}
                  link={btn.link}
                  target={btn.target}
                  rel={btn.rel}
                />
              );
            })}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
