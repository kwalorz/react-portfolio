import './Cards.css';

const Card = ({ imgSrc, altText, title, description, toggleOff, children }) => {
  return (
    <div className={`card`}>
      {toggleOff ? <span className='close'>×</span> : ''}
      {imgSrc ? <img src={imgSrc} alt={altText} /> : ''}
      {title ? <h1>{title}</h1> : ''}
      <br />
      {description ? <p>{description}</p> : ''}
      {children}
    </div>
  );
};

export default Card;
