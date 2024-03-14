import React from 'react';
import './Progressbar.css';

const ProgressBar = ({ progress }) => {
  return (
    <div className="progress-container">
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ '--progress': `${progress}%` }} />
        <div className="progress-label">{progress}%</div>
      </div>
      <div className="progress-status">
        {progress === 100 ? 'Complete' : 'Loading...'}
      </div>
    </div>
  );
};

export default ProgressBar;
