import React, { useContext } from 'react';
import './Projects.css';
import { ModalContext } from '../../Helper/ModalProvider';
import projectSrc from './ProjectSrc';
import Card from '../../components/Cards/Cards';
import Button from '../../components/Button/Button';

const Projects = () => {
  const newState = useContext(ModalContext);

  return (
    <div
      id='projects-section'
      className={`modal ${
        newState.openProjects ? `modal--visible ` : `modal--closed`
      }`}
    >
      <span className='close' onClick={newState.closeModalProjects}>
        ×
      </span>
      <div className='modal_content-projects'>
        {projectSrc.map((project, index) => (
          <Card
            key={`project-${index}`}
            imgSrc={project.projImg.imgSrc}
            altText={project.projImg.altText}
            title={project.projTitle}
            description={project.projDescription}
          >
            {project.projButtons.map((btn) => {
              <Button
                label={btn.label}
                link={btn.link}
                target={btn.target}
                rel={btn.rel}
              />;
            })}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
