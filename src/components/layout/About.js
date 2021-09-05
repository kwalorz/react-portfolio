import React, { useContext } from "react";
import { ModalContext } from "../ModalProvider";

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
          <img className='about-photo' src='img/bio-picture.jpg' alt='bio' />
          <div className='about-text'>
            <h1>About Me</h1>
            <p>
              I am a self taught developer with experience creating projects in
              HTML, CSS, and JavaScript. <br />
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
