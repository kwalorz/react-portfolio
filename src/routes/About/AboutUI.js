import React from 'react';
import './About.css';
import Card from '../../components/Cards/Cards';
import bioImg from '../../img/bio-picture.jpg';

const About = () => {
  return (
    <section id='about-section'>
      <div className='waves layer-top'></div>
      <div className='waves layer-bottom'></div>
      <div className='about-content'>
        <Card
          imgSrc={bioImg}
          altText='bio'
          title='About Me'
          description={
            "I am a self taught developer with experience creating projects in HTML, CSS, and JavaScript using the React JS library.My main focus has been gaining proficiency with JavaScript, but I am eager to learn new languages, libraries, and frameworks for my own curiousity and to fit my future employer's needs."
          }
        ></Card>
      </div>
    </section>
  );
};

export default About;
