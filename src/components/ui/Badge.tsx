import React from 'react';
import './Badge.css';

interface BadgeProps {
  variant?: 'hero' | 'structure' | 'home';
  children: React.ReactNode;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ 
  variant = 'hero', 
  children, 
  className = '' 
}) => {
  const badgeClass = `badge badge-${variant} ${className}`;

  return (
    <span className={badgeClass}>
      {children}
    </span>
  );
};

export default Badge;
