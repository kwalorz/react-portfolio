import React, { Fragment } from 'react';
import spinner from './spinner.gif';

const Spinner = () => {
  return (
    <Fragment>
      <img
        src={spinner}
        alt='loading-spinner'
        style={{
          display: 'block',
          position: 'absolute',
          width: '200px',
          top: '25%',
          left: 'calc(50% - 100px)',
        }}
      />
    </Fragment>
  );
};

export default Spinner;
