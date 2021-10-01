import { useState } from 'react';

const useProjectState = () => {
  const [openProject1, setProject1] = useState(false);
  const [openProject2, setProject2] = useState(false);
  const [openProject3, setProject3] = useState(false);

  const handleProject1 = () => {
    setProject1((prev) => !prev);
  };
  const handleProject2 = () => {
    setProject2((prev) => !prev);
  };
  const handleProject3 = () => {
    setProject3((prev) => !prev);
  };

  return {
    openProject1,
    openProject2,
    openProject3,
    handleProject1,
    handleProject2,
    handleProject3,
  };
};

export default useProjectState;
