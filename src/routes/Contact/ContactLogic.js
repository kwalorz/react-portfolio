import { useState } from 'react';

const useFormValidation = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errName, setErrName] = useState('');
  const [errEmail, setErrEmail] = useState('');
  const [errPhone, setErrPhone] = useState('');
  const [nameValidated, setNameValidation] = useState(false);
  const [emailValidated, setEmailValidation] = useState(false);
  const [phoneValidated, setPhoneValidation] = useState(false);

  function validateName() {
    if (name === '') setErrName('*Name Required');
    if (name !== '') {
      const nameValue = name.replace(/\s+/g, '');
      console.log(nameValue);
      const onlyLetters = /^[a-z]+$/i;

      onlyLetters.test(nameValue)
        ? setNameValidation(true)
        : setErrName('*Please enter a valid name');
    }
  }

  function validateEmail() {
    if (phoneNumber === '' && email === '')
      setErrEmail('*Please enter either a phone number or email');
    if (email !== '') {
      const emailValue = email.trim();
      const emailCheck = /^\S+@\S+\.\S+$/;

      emailCheck.test(emailValue)
        ? setEmailValidation(true)
        : setErrEmail('*Please enter a valid email');
    }
  }

  function validatePhoneNum() {
    if (phoneNumber === '' && email === '')
      setErrPhone('*Please enter either a phone number or email');
    if (phoneNumber !== '') {
      const phoneValue = phoneNumber.replace(/-/g, '').trim();
      const onlyNumbers = /^[0-9]*$/;

      onlyNumbers.test(phoneValue) || phoneValue.length < 10
        ? setPhoneValidation(true)
        : setErrPhone('*Please enter a valid phone number');
    }
  }

  const formValidation = (e) => {
    validateName();
    validateEmail();
    validatePhoneNum();

    if (!nameValidated && !emailValidated && !phoneValidated)
      e.preventDefault();
  };

  return {
    formValidation,
    name,
    email,
    phoneNumber,
    setName,
    setEmail,
    setPhoneNumber,
    errName,
    errEmail,
    errPhone,
  };
};

export default useFormValidation;
