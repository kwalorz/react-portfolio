import './ButtonStyles.css';

const Button = ({ children, onClick, type, label, link }) => {
  return (
    <button className='btn' onClick={onClick} type={type}>
      {link ? (
        <a href={link} target='_blank' rel='noopener noreferrer'>
          {label}
        </a>
      ) : (
        label
      )}
    </button>
  );
};

export default Button;
