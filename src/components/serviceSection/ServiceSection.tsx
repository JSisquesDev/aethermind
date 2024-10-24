import React from 'react';
import Image from 'next/image';

interface ServiceSectionProps {
  title: string;
  description: string;
  imageUrl: string;
  imagePosition: 'left' | 'right';
  colorType: 'primary' | 'secondary';
}

const ServiceSection = ({ title, description, imageUrl, imagePosition, colorType }: ServiceSectionProps) => {
  return (
    <div
      className={`service-section ${imagePosition === 'left' ? 'flex-row-reverse' : 'flex-row'} ${
        colorType === 'primary' ? 'bg-primary' : 'bg-secondary'
      }`}
    >
      <div className="service-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="service-image">
        <Image src={imageUrl} alt={title} width={500} height={300} />
      </div>
    </div>
  );
};

export default ServiceSection;
