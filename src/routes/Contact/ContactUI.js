import React, { useContext } from 'react';
import ContactForm from './ContactForm/ContactForm';
import './Contact.css';

import { ModalContext } from '../../Helper/ModalProvider';

const Contact = () => {
  const newState = useContext(ModalContext);

  return (
    <div
      id='contact-section'
      className={`modal ${
        newState.openContact ? `modal--visible` : `modal--closed`
      }`}
    >
      <div className='modal-content-contact'>
        <span className='close' onClick={newState.closeModalContact}>
          &times;
        </span>
        <div className='contact-content'>
          <h1>Contact Me</h1>
          <div className='contact-info'>
            <ContactForm />
            <div className='border-right'></div>
            <div className='contact-icons'>
              <div className='phone'>
                <i className='fas fa-phone-square fa-3x'></i>
                <span>781-985-4659</span>
              </div>
              <div className='email'>
                <i className='fas fa-envelope fa-3x'></i>
                <a href='mailto:kmwalorz@gmail.com?'>kmwalorz@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
