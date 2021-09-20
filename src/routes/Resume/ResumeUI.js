import React from 'react';
import resumeImg from '../../img/Resume_2021.pdf';
import Card from '../../components/Cards/Cards';
import './Resume.css';

const Resume = () => {
  return (
    <div id='resume-section' className={`modal`}>
      <div className='waves layer-top'></div>
      <div className='waves layer-bottom'></div>
      <div className='resume-content'>
        <Card>
          <embed
            src={resumeImg}
            type='application/pdf'
            width='100%'
            height='600px'
          />
        </Card>
      </div>
    </div>
  );
};

export default Resume;
