import React from 'react';
import './IconBox.css';

interface IconBoxProps {
  children: React.ReactNode;
  variant?: 'hero' | 'structure' | 'benefit';
  className?: string;
}

const IconBox: React.FC<IconBoxProps> = ({ 
  children, 
  variant = 'hero',
  className = '' 
}) => {
  return (
    <div className={`icon-box icon-box-${variant} ${className}`}>
      {children}
    </div>
  );
};

export default IconBox;