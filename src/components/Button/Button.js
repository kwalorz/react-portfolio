import './ButtonStyles.css';

const Button = ({ onClick, type, label, link, hidden, children }) => {
  return (
    <button
      className={`btn ${hidden && 'btn-hidden'}`}
      onClick={onClick}
      type={type}
    >
      {link ? (
        <a href={link} target='_blank' rel='noopener noreferrer'>
          {label}
        </a>
      ) : (
        label || children
      )}
    </button>
  );
};

export default Button;
