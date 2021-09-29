import { useState } from 'react';

const useProjectState = () => {
  const [openProject1, setProject1] = useState(false);
  const [openProject2, setProject2] = useState(false);
  const [openProject3, setProject3] = useState(false);

  const projects = [openProject1, openProject2, openProject3];

  const handleProject = (index) => {
    if (index === 0) setProject1((prev) => !prev);
    if (index === 1) setProject2((prev) => !prev);
    if (index === 2) setProject3((prev) => !prev);
  };

  return {
    projects,
    handleProject,
  };
};

export default useProjectState;
