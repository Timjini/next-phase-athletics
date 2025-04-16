import React from 'react';

const GradientDivider = () => {
  return (
    <div 
      className="h-px w-full my-6 bg-amber-600" 
      style={{
        background: 'linear-gradient(to right, transparent, #FFC300, #FFD700, transparent)',
      }}
    />
  );
};

export default GradientDivider;