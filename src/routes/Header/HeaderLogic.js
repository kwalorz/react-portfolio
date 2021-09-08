import { useState } from 'react';

const useHeaderLogic = () => {
  const [openMobileNav, setMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setMobileNav((prevState) => !prevState);
  };

  return { openMobileNav, toggleMobileNav };
};

export default useHeaderLogic;
