import Button from '../../../components/Button/Button';
import useFormValidation from './ContactFormLogic';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    onSubmit,
    formState: { errors },
    inputValidations,
  } = useFormValidation();

  const { validFirstName, validLastName, validPhoneNumber, validEmail } =
    inputValidations;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type='hidden' name='_subject' value='New Form Submission' />

      <span className='error-message'>
        {errors.firstName && validFirstName.errMessage}
      </span>
      <input {...register('firstName', validFirstName.params)} />
      <label htmlFor='First Name'>First Name</label>
      <span className='error-message'>
        {errors.lastName && validLastName.errMessage}
      </span>
      <input {...register('lastName', validLastName.params)} />
      <label htmlFor='Last Name'>Last Name</label>
      <span className='error-message'>
        {errors.email && validEmail.errMessage}
      </span>
      <input {...register('email', validEmail.params)} />
      <label htmlFor='email'>Email</label>
      <span className='error-message'>
        {errors.phone && validPhoneNumber.errMessage}
      </span>
      <input {...register('phone', validPhoneNumber.params)} />
      <label htmlFor='phone'>Phone</label>
      <label htmlFor='message' name='message'>
        Leave a message
      </label>
      <textarea
        {...register('message')}
        name='message'
        id='message'
        cols='40'
        rows='4'
      ></textarea>
      <Button label='Submit' type='submit' />
    </form>
  );
};

export default ContactForm;
