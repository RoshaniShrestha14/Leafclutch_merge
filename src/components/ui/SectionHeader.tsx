import React from 'react';
import Badge from './Badge';
import './SectionHeader.css';

interface SectionHeaderProps {
  badge?: string;
  title: React.ReactNode;
  description?: string;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  badge, 
  title, 
  description,
  className = '' 
}) => {
  return (
    <div className={`section-header ${className}`}>
      {badge && (
        <div className="section-badge-wrapper">
          <Badge variant="structure">{badge}</Badge>
        </div>
      )}
      <h2 className="section-title">{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
};

export default SectionHeader;
