import { useEffect, useState } from 'react';
import './Cards.css';

const Card = ({ title, addClass, children }) => {
  const [cardPop, setCardPop] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setCardPop(false);
    }, 1000);
  }, []);

  return (
    <div className={`card ${cardPop && 'card-pop'} ${addClass}`}>
      {title && <h1>{title}</h1>}
      {children}
    </div>
  );
};

export default Card;
