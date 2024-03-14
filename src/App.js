import React, { useState, useEffect } from 'react';
import ProgressBar from './Progressbar';

const App = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress(prevProgress => prevProgress + 1); // Increase by 1% per interval
      } else {
        clearInterval(interval);
      }
    }, 50); // Adjust interval timing (e.g., 50ms for faster progression)

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <div className="app">
      <h1>Progress Bar</h1>
      <ProgressBar progress={progress} />
    </div>
  );
};

export default App;
