import { useForm } from 'react-hook-form';

const useFormValidation = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const inputValidations = {
    validFirstName: {
      params: {
        required: 'Required',
        pattern: /^[a-z]+$/i,
      },
      errMessage: '*Please enter a valid name',
    },
    validLastName: {
      params: { pattern: /^[a-z]+$/i },
      errMessage: '*Please enter a valid name',
    },
    validEmail: {
      params: { pattern: /^\S+@\S+\.\S+$/ },
      errMessage: 'Please enter a valid email',
    },

    validPhoneNumber: {
      params: { pattern: /(^[0-9]+[-]*[0-9]+$)/ },
      errMessage: '*Please enter a valid phone number',
    },
  };

  const onSubmit = async (data) => {
    await fetch('https://submit-form.com/bgn6IvKn', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
    });
    return {
      submitSuccess: {
        hideForm: 'form-hidden',
        showMessage: 'thank_you_message',
      },
    };
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    formState: { errors },
    inputValidations,
  };
};

export default useFormValidation;
