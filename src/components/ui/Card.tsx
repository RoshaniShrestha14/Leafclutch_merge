import React from 'react';
import './Card.css';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'feature' | 'benefit' | 'structure' | 'catalog';
  className?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  variant = 'default',
  className = '',
  onClick 
}) => {
  return (
    <div 
      className={`card card-${variant} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
