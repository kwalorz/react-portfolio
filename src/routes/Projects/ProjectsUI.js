import React from 'react';
import projectSrc from './ProjectSrc';
import './Projects.css';
import Card from '../../components/Cards/Cards';
import Button from '../../components/Button/Button';
import useProjectState from './ProjectState';

const Projects = () => {
  const { project1, project2, project3 } = projectSrc;
  const {
    openProject1,
    openProject2,
    openProject3,
    handleProject1,
    handleProject2,
    handleProject3,
  } = useProjectState();

  return (
    <div id='projects-section'>
      <div className='waves layer-top'></div>
      <div className='waves layer-bottom'></div>
      <div className='projects-content'>
        <Card
          title={project1.projTitle}
          addClass={openProject1 && 'project--open'}
        >
          {openProject1 && (
            <span className='close' onClick={handleProject1}>
              &times;
            </span>
          )}
          {openProject1 && (
            <img
              className='content--visible'
              src={project1.projImg.imgSrc}
              alt={project1.projImg.altText}
              height='200'
              width='350'
            />
          )}
          {openProject1 && (
            <p className='content--visible'>{project1.projDescription}</p>
          )}
          <Button label='Open' hidden={openProject1} onClick={handleProject1} />
          {project1.projButtons.map((btn, index) => {
            return (
              <Button
                key={`project1-btn-${index}`}
                hidden={!openProject1}
                label={btn.label}
                link={btn.link}
              />
            );
          })}
        </Card>
        <Card
          title={project2.projTitle}
          addClass={openProject2 && 'project--open'}
        >
          {openProject2 && (
            <span className='close' onClick={handleProject2}>
              &times;
            </span>
          )}
          {openProject2 && (
            <img
              className='content--visible'
              src={project2.projImg.imgSrc}
              alt={project2.projImg.altText}
              height='200'
              width='350'
            />
          )}
          {openProject2 && (
            <p className='content--visible'>{project2.projDescription}</p>
          )}
          <Button label='Open' hidden={openProject2} onClick={handleProject2} />
          {project2.projButtons.map((btn, index) => {
            return (
              <Button
                key={`project2-btn-${index}`}
                hidden={!openProject2}
                label={btn.label}
                link={btn.link}
              />
            );
          })}
        </Card>
        <Card
          title={project3.projTitle}
          addClass={openProject3 && 'project--open'}
        >
          {openProject3 && (
            <span className='close' onClick={handleProject3}>
              &times;
            </span>
          )}
          {openProject3 && (
            <img
              className='content--visible'
              src={project3.projImg.imgSrc}
              alt={project3.projImg.altText}
              height='200'
              width='350'
            />
          )}
          {openProject3 && (
            <p className='content--visible'>{project3.projDescription}</p>
          )}
          <Button label='Open' hidden={openProject3} onClick={handleProject3} />
          {project3.projButtons.map((btn, index) => {
            return (
              <Button
                key={`project3-btn-${index}`}
                hidden={!openProject3}
                label={btn.label}
                link={btn.link}
              />
            );
          })}
        </Card>
      </div>
    </div>
  );
};

export default Projects;
