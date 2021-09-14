import { useState } from 'react';

const useNavbarLogic = () => {
  const [openMobileNav, setMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setMobileNav((prevState) => !prevState);
  };

  return { openMobileNav, toggleMobileNav };
};

export default useNavbarLogic;
