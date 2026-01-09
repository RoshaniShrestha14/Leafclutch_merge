import React from 'react';
import './button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'hero' | 'service';
  href?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  href, 
  children, 
  icon,
  className = '',
  ...props 
}) => {
  const buttonClass = `btn btn-${variant} ${className}`;

  if (href) {
    return (
      <a href={href} className={buttonClass}>
        {children}
        {icon && <span className="btn-icon">{icon}</span>}
      </a>
    );
  }

  return (
    <button className={buttonClass} {...props}>
      {children}
      {icon && <span className="btn-icon">{icon}</span>}
    </button>
  );
};

export default Button;
