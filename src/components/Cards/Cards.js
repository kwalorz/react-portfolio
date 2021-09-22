import './Cards.css';

const Card = ({
  imgSrc,
  altText,
  title,
  description,
  imgWidth,
  delay,
  closeCard,
  children,
}) => {
  return (
    <div
      className='card'
      style={{
        animation: `openCards 0.5s ${delay ? delay * 850 : 0}ms  forwards`,
      }}
    >
      {closeCard ? <span className='close'>&times;</span> : ''}
      {imgSrc ? <img src={imgSrc} alt={altText} width={imgWidth} /> : ''}
      {title ? <h1>{title}</h1> : ''}
      <br />
      {description ? <p>{description}</p> : ''}
      {children}
    </div>
  );
};

export default Card;
