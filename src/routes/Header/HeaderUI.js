import React, { useContext } from 'react';
import './Header.css';
import Navbar from '../../components/Navbar/Navbar';
import { ModalContext } from '../../Helper/ModalProvider';
import Button from '../../components/Button/Button';

const Header = () => {
  const newState = useContext(ModalContext);

  return (
    <header>
      <div className='waves layer-top'></div>
      <div className='waves layer-bottom'></div>
      <Navbar />
      <div className='header_glass'>
        <h1>Welcome!</h1>
        <br />
        <p>
          Thank you for visiting my site. <br />
          <br />
          Be sure to visit my projects page and send me a message via the
          contact button!
        </p>
        <Button onClick={newState.openModalProjects}>View Projects</Button>
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
