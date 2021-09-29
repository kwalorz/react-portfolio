import React from 'react';
import projectSrc from './ProjectSrc';
import './Projects.css';
import Card from '../../components/Cards/Cards';
import Button from '../../components/Button/Button';
import useProjectState from './ProjectState';

const Projects = () => {
  const { projects, handleProject } = useProjectState();

  return (
    <div id='projects-section'>
      <div className='waves layer-top'></div>
      <div className='waves layer-bottom'></div>
      <div className='projects-content'>
        {projectSrc.map(
          ({ projTitle, projImg, projDescription, projButtons }, index) => {
            return (
              <Card
                key={`project-${index + 1}`}
                delay={index * 850}
                title={projTitle}
                addAnimation={projects[index] && `transform: translateY(-15%)`}
              >
                {projects[index] && (
                  <span className='close' onClick={() => handleProject(index)}>
                    &times;
                  </span>
                )}
                {projects[index] && (
                  <img src={projImg.imgSrc} alt={projImg.altText} width='350' />
                )}
                {projects[index] && <p>{projDescription}</p>}
                <Button
                  hidden={projects[index]}
                  label='View'
                  onClick={() => handleProject(index)}
                />
                {projButtons.map((btn, index) => {
                  return (
                    <Button
                      hidden={!projects[index]}
                      label={btn.label}
                      link={btn.link}
                    />
                  );
                })}
              </Card>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Projects;
