import React, { useContext } from 'react';
import './Projects.css';
import { ModalContext } from '../../Helper/ModalProvider';
import ProjectSrc from './ProjectSrc';
import Card from '../../components/Cards/Cards';

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
        {ProjectSrc.map((project, index) => (
          <Card
            key={`project-${index}`}
            imageSrc={project.projectImg.imgSrc}
            altText={project.projectImg.altText}
            title={project.projectTitle}
            description={project.projectDescription}
            buttons={project.projectButtons}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
