import './Cards.css';

const Card = ({
  imgSrc,
  altText,
  title,
  description,
  toggleOff,
  wait,
  children,
}) => {
  return (
    <div
      className={`card`}
      style={{ animation: `openCards 0.5s ${wait ? wait : 0}s forwards` }}
    >
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
