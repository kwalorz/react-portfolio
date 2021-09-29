import './Cards.css';

const Card = ({ title, delay, addAnimation, children }) => {
  return (
    <div
      className='card'
      style={{
        animation: `openCards 0.5s ${delay ? delay : 0}ms  forwards`,
        addAnimation,
      }}
    >
      {title && <h1>{title}</h1>}
      {children}
    </div>
  );
};

export default Card;
