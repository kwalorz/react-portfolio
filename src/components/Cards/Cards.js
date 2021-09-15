import './Cards.css';
import Button from '../Button/Button';

const Card = ({ imageSrc, altText, title, description, buttons, children }) => {
  return (
    <div className={`card`}>
      {imageSrc ? <img src={imageSrc} alt={altText} /> : ''}
      <h1>{title}</h1>
      {description ? <p>{description}</p> : ''}
      {buttons?.map((btn, index) => (
        <Button key={`button-${index}`}>
          {btn.link ? (
            <a
              href={btn.link}
              target={btn.target}
              download={btn.download}
              rel={btn.rel}
              alt={btn.altText}
            >
              {btn.label}
            </a>
          ) : (
            btn.label
          )}
        </Button>
      ))}
      {children}
    </div>
  );
};

export default Card;
