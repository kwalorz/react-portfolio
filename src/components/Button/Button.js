import './ButtonStyles.css';

const Button = ({ children, onClick, type }) => {
  console.log('rendered');
  return (
    <button className='btn' onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
