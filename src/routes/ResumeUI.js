import React, { useContext } from 'react';
import resumeImg from '../img/Resume_2021.pdf';
import { ModalContext } from '../Helper/ModalProvider';
import Card from '../components/Cards/Cards';

const Resume = () => {
  const newState = useContext(ModalContext);

  return (
    <div
      id='resume-section'
      className={`modal ${
        newState.openResume ? `modal--visible` : `modal--closed`
      }`}
    >
      <div className='modal_content-resume modal-center'>
        <Card
          title={'Download My Resume'}
          buttons={[
            { link: resumeImg, download: 'kevin-walorz_resume', label: 'PDF' },
          ]}
        >
          <span className='close' onClick={newState.closeModalResume}>
            &times;
          </span>
        </Card>
      </div>
    </div>
  );
};

export default Resume;
