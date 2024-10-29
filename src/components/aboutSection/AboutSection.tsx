import React from 'react';

interface AboutSectionProps {
  title: string;
  children: React.ReactNode;
}

const AboutSection = ({ title, children }: AboutSectionProps) => {
  return (
    <section className="about-section">
      <h2 className="about-section-title">{title}</h2>
      <div className="about-section-content">{children}</div>
    </section>
  );
};

export default AboutSection;
