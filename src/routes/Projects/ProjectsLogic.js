import { useState, useEffect } from 'react';

const useProjectsLogic = () => {
  const [carouselPosition, setPosition] = useState(0);
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    setAngle((carouselPosition / 4) * -360);
  }, [carouselPosition]);

  const slideLeft = () => {
    if (carouselPosition === 0) {
      setPosition(3);
    } else if (carouselPosition !== 0) {
      setPosition((prevPosition) => prevPosition - 1);
    }
  };
  const slideRight = () => {
    if (carouselPosition === 3) {
      setPosition(0);
    } else if (carouselPosition !== 3) {
      setPosition((prevPosition) => prevPosition + 1);
    }
  };

  return { carouselPosition, angle, slideLeft, slideRight };
};

export default useProjectsLogic;
