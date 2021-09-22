import './ButtonStyles.css';

const Button = ({ addClass, onClick, type, label, link, children }) => {
  return (
    <button
      className={`btn ${addClass ? addClass : ''}`}
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
