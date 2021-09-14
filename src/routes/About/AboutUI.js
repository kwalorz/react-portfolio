import React, { useContext } from 'react';
import './About.css';
import bioImg from '../../img/bio-picture.jpg';
import { ModalContext } from '../../Helper/ModalProvider';

const About = () => {
  const newState = useContext(ModalContext);

  return (
    <div
      id='about-section'
      className={`modal ${
        newState.openAbout ? `modal--visible` : `modal--closed`
      }`}
    >
      <div className='modal-content-about'>
        <span className='close' onClick={newState.closeModalAbout}>
          ×
        </span>

        <div className='about-content'>
          <div className='photo-container'>
            <img className='about-photo' src={bioImg} alt='bio' />
          </div>
          <div className='about-text'>
            <h1>About Me</h1>
            <p>
              I am a self taught developer with experience creating projects in
              HTML, CSS, and JavaScript using the React JS library. <br />
              <br />
              My main focus has been gaining proficiency with JavaScript, but I
              am eager to learn new languages, libraries, and frameworks for my
              own curiousity and to fit my future employer's needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
