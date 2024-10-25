import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section = ({ title, children }: SectionProps) => {
  return (
    <div className="privacy-policy-section">
      <h2 className="privacy-policy-section-title">{title}</h2>
      <p className="privacy-policy-section-content">{children}</p>
    </div>
  );
};

export default Section;
