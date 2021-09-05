import React, { useContext, useState } from "react";
import { ModalContext } from "../ModalProvider";

const Contact = () => {
  const newState = useContext(ModalContext);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [errName, setErrName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPhone, setErrPhone] = useState("");

  const formValidation = (e) => {
    e.preventDefault();

    function validateName() {
      if (name === "") setErrName("*Name Required");
      if (name !== "") {
        const nameValue = name.trim();
        const onlyLetters = /^[a-z]+$/i;
        if (!onlyLetters.test(nameValue))
          setErrName("*Please enter a valid name");
      }
    }

    function validateEmail() {
      if (phoneNumber === "" && email === "")
        setErrEmail("*Please enter either a phone number or email");
      if (email !== "") {
        const emailValue = email.trim();
        const emailCheck = /^\S+@\S+\.\S+$/;

        if (!emailCheck.test(emailValue))
          setErrEmail("*Please enter a valid email");
      }
    }

    function validatePhoneNum() {
      if (phoneNumber === "" && email === "")
        setErrPhone("*Please enter either a phone number or email");
      if (phoneNumber !== "") {
        const phoneValue = phoneNumber.replace(/-/g, "").trim();
        const onlyNumbers = /^[0-9]*$/;

        if (!onlyNumbers.test(phoneValue) || phoneValue.length < 10)
          setErrPhone("*Please enter a valid phone number");
      }
    }

    validateName();
    validateEmail();
    validatePhoneNum();
  };

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
            <form
              action='https://formsubmit.co/1ccfbfc31c68edcda3ad4404f958fd35'
              method='POST'
              encType='multipart/form-data'
              onSubmit={formValidation}
            >
              <input
                type='hidden'
                name='_subject'
                value='New Form Submission'
              />
              <label htmlFor='name'>Name</label>
              <span className='error-message'>{errName}</span>
              <input
                type='text'
                id='name'
                name='name'
                placeholder='John Doe'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label htmlFor='email'>Email</label>
              <span className='error-message'>{errEmail}</span>
              <input
                type='email'
                id='email'
                name='email'
                placeholder='@youremail.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor='phone'>Phone</label>
              <span className='error-message'>{errPhone}</span>
              <input
                type='tel'
                name='phone'
                id='phone'
                placeholder='555-555-5555'
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <label htmlFor='message'>Leave a message</label>
              <textarea
                name='message'
                id='message'
                cols='40'
                rows='4'
              ></textarea>
              <button type='submit' className='btn'>
                SUBMIT
              </button>
            </form>
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
