import React, { useContext, useState } from 'react';
import { ModalContext } from '../ModalProvider';

const Projects = () => {
  const newState = useContext(ModalContext);
  const [carouselPosition, setPosition] = useState(0);
  let angle = (carouselPosition / 4) * -360;

  const slideLeft = () => {
    if (carouselPosition === 0)
      setPosition((prevPosition) => (prevPosition = 3));
    else if (carouselPosition !== 0)
      setPosition((prevPosition) => prevPosition - 1);
  };
  const slideRight = () => {
    if (carouselPosition === 3)
      setPosition((prevPosition) => (prevPosition = 0));
    else if (carouselPosition !== 3)
      setPosition((prevPosition) => prevPosition + 1);
  };

  return (
    <div
      id='projects-section'
      className={`modal ${
        newState.openProjects ? `modal--visible` : `modal--closed`
      }`}
    >
      <div className='modal_content-projects'>
        <span className='close' onClick={newState.closeModalProjects}>
          ×
        </span>
        <div className='project_carousel-container'>
          <button className='slider_btn slider_btn-left' onClick={slideLeft}>
            ‹
          </button>
          <div className='project_carousel'>
            <div
              className='project_content'
              style={{ transform: `rotateY(${angle}deg)` }}
            >
              <div className='project_window'>
                <img
                  src='img/next-js-landing-page.png'
                  alt='next js landing page'
                />
                <div
                  className={`project_description ${
                    carouselPosition === 0
                      ? 'project_description--active'
                      : 'project_description--inactive'
                  }`}
                >
                  <h1>Next JS Landing Page</h1>
                  <p>
                    Project converted from standard HTML/CSS and optimized for
                    Next JS.
                    <br />
                    <br />
                    Posts are linked to articles written in .md files. Files are
                    then parsed and compiled using 'Marked' and 'gray-matter'
                    packages.
                  </p>
                  <div className='project_description-buttons'>
                    <a
                      href='https://github.com/kwalorz/landing_page'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      See Source Code
                    </a>
                    <a
                      href='https://landingpage-nextjs.netlify.app/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Visit Site
                    </a>
                  </div>
                </div>
              </div>
              <div className='project_window'>
                <img
                  src='img/React_modal-window.png'
                  alt='modal-windows-reactjs'
                />
                <div
                  className={`project_description ${
                    carouselPosition === 1
                      ? 'project_description--active'
                      : 'project_description--inactive'
                  }`}
                >
                  <h1>React JS: Email Capture Window</h1>
                  <p>
                    Modal appears when user's mouse leaves the main content
                    area.
                    <br />
                    <br />
                    Cookies are also used to prevent the modal from popping up
                    again for a preset amount of time if they decide they are
                    not interested in the offer.
                  </p>
                  <div className='project_description-buttons'>
                    <a
                      href='https://github.com/kwalorz/email_capture-react'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      See Source Code
                    </a>
                    <a
                      href='https://kwalorz.github.io/email_capture-react/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Visit Site
                    </a>
                  </div>
                </div>
              </div>
              <div className='project_window'>
                <img src='img/top_quality_paint.png' alt='painting website' />
                <div
                  className={`project_description ${
                    carouselPosition === 2
                      ? 'project_description--active'
                      : 'project_description--inactive'
                  }`}
                >
                  <h1>Top Quality Painting Co</h1>
                  <p>
                    Responsive 5-page website layout made with WordPress using
                    the Divi design tool. <br />
                    <br />
                    Project consists of custom CSS used for styling.
                  </p>
                  <div className='project_description-buttons'>
                    <a
                      href='https://topqualitypaintco.com/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Visit Site
                    </a>
                  </div>
                </div>
              </div>
              <div className='project_window'>
                <img src='img/mapty_app.png' alt='mapty_app' />
                <div
                  className={`project_description ${
                    carouselPosition === 3
                      ? 'project_description--active'
                      : 'project_description--inactive'
                  }`}
                >
                  <h1>Work Out Tracking App</h1>
                  <p>
                    Made with HTML, CSS, and JavaScript. <br />
                    <br />
                    Project utilizes Leaflet API for geolocation services to
                    track workouts.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button className='slider_btn slider_btn-right' onClick={slideRight}>
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
