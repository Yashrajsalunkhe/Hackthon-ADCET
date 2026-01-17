import React from 'react';

export const Card = ({ className = '', children, ...props }) => {
  return (
    <div 
      className={`rounded-lg shadow-md ${className}`} 
      {...props}
    >
      {children}
    </div>
  );
};

export const CardContent = ({ className = '', children, ...props }) => {
  return (
    <div 
      className={`p-6 ${className}`} 
      {...props}
    >
      {children}
    </div>
  );
};
