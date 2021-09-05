import React, { useContext, useState } from 'react';
import { ModalContext } from '../ModalProvider';

const Header = () => {
  const newState = useContext(ModalContext);
  const [openMobileNav, setMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setMobileNav((prevState) => !prevState);
  };

  return (
    <header>
      <div className='waves layer-top'></div>
      <div className='waves layer-bottom'></div>
      <div className='overlay' />
      <div className='hamburger_menu' onClick={toggleMobileNav}>
        <div className='hamburger_line'></div>
        <div className='hamburger_line'></div>
        <div className='hamburger_line'></div>
      </div>
      <nav className={`${openMobileNav ? 'nav--open' : 'nav--close'}`}>
        <span className='close_nav' onClick={toggleMobileNav}>
          ×
        </span>
        <ul>
          <li>
            <button id='projects-btn' onClick={newState.openModalProjects}>
              Projects
            </button>
          </li>
          <li>
            <button id='about-btn' onClick={newState.openModalAbout}>
              About
            </button>
          </li>
          <li>
            <button id='resume-btn' onClick={newState.openModalResume}>
              Resume
            </button>
          </li>
          <li>
            <button id='contact-btn' onClick={newState.openModalContact}>
              Contact
            </button>
          </li>
        </ul>
      </nav>
      <div className='header_glass'>
        <h1>Welcome!</h1>
        <br />
        <p>
          Thank you for visiting my site. <br />
          <br />
          Be sure to visit my projects page and send me a message via the
          contact button!
        </p>
        <button
          className='home-btn'
          onClick={() => {
            newState.openModalProjects(true);
          }}
        >
          VIEW PROJECTS
        </button>
      </div>
      <div className='social_icons'>
        <a
          href='https://github.com/kwalorz'
          target='_blank'
          rel='noopener noreferrer'
          alt='github_profile'
        >
          <i className='fab fa-github' />
        </a>
        <a
          href='https://www.linkedin.com/in/kevin-walorz-1441b4b6/'
          target='_blank'
          rel='noopener noreferrer'
          alt='linkedIn_profile'
        >
          <i className='fab fa-linkedin' />
        </a>
      </div>
    </header>
  );
};

export default Header;
