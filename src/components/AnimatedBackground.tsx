import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-background">
      <div className="absolute inset-0 z-0 perspective-container">
        <div className="grid-plane"></div>
      </div>
      
      {/* Top fade/blur to hide the horizon */}
      <div className="grid-fade"></div>
    </div>
  );
};

export default AnimatedBackground;
