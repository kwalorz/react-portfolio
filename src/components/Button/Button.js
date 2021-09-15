import './ButtonStyles.css';

const Button = ({ children, onClick, type, label, link }) => {
  console.log('rendered');
  return (
    <button className='btn' onClick={onClick} type={type}>
      {label || children}
    </button>
  );
};

export default Button;
