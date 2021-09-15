import React, { useContext } from 'react';
import './About.css';
import Card from '../../components/Cards/Cards';
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
      <div className='modal_content-about modal-center'>
        <Card
          imageSrc={bioImg}
          altText='bio'
          title='About Me'
          description={
            <p>
              I am a self taught developer with experience creating projects in
              HTML, CSS, and JavaScript using the React JS library. <br />
              <br />
              My main focus has been gaining proficiency with JavaScript, but I
              am eager to learn new languages, libraries, and frameworks for my
              own curiousity and to fit my future employer's needs.
            </p>
          }
        >
          {
            <span className='close' onClick={newState.closeModalAbout}>
              ×
            </span>
          }
        </Card>
      </div>
    </div>
  );
};

export default About;
