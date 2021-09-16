import './Cards.css';

const Card = ({ imgSrc, altText, title, description, children }) => {
  return (
    <div className={`card`}>
      {imgSrc ? <img src={imgSrc} alt={altText} /> : ''}
      {title ? <h1>{title}</h1> : ''}
      <br />
      {description ? <p>{description}</p> : ''}
      {children}
    </div>
  );
};

export default Card;
