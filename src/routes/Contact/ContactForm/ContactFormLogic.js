import { useForm } from 'react-hook-form';

const useFormValidation = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const inputValidations = {
    validFirstName: {
      params: {
        required: true,
        pattern: /^[A-Za-z]+$/i,
      },
      errMessage: '*Please enter a valid name',
    },
    validLastName: {
      params: { pattern: /^[A-Za-z]+$/i },
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

  return {
    register,
    handleSubmit,
    onSubmit,
    formState: { errors },
    inputValidations,
  };
};

export default useFormValidation;
