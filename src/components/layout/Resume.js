import React, { useContext } from "react";
import { ModalContext } from "../ModalProvider";

const Resume = () => {
  const newState = useContext(ModalContext);

  return (
    <div
      id='resume-section'
      className={`modal ${
        newState.openResume ? `modal--visible` : `modal--closed`
      }`}
    >
      <div className='modal-content-resume'>
        <span className='close' onClick={newState.closeModalResume}>
          &times;
        </span>
        <div className='resume-content'>
          <h1>Download My Resume</h1>
          <a
            className='resume-btn'
            href='img/Resume_2021.pdf'
            download='kevin-walorz_resume'
          >
            PDF
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
