import React from 'react';
import Card from '../../components/Cards/Cards';
import ContactForm from './ContactForm/ContactForm';
import './Contact.css';

const Contact = () => {
  return (
    <div id='contact-section' className={`modal`}>
      <div className='waves layer-top'></div>
      <div className='waves layer-bottom'></div>
      <div className='contact-content'>
        <Card title='Contact Me'>
          <div className='contact-info'>
            <ContactForm />
            <div className='border-right'></div>
            <div className='contact-icons'>
              <div className='phone-icon'>
                <i className='fas fa-phone-square fa-3x'></i>
                <span>781-985-4659</span>
              </div>
              <div className='email-icon'>
                <i className='fas fa-envelope fa-3x'></i>
                <a href='mailto:kmwalorz@gmail.com?'>kmwalorz@gmail.com</a>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
