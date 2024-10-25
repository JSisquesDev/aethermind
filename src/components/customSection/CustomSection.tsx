import React from 'react';
import Image from 'next/image';

interface CustomSectionProps {
  title: string;
  description: string;
  imageUrl?: string;
  imagePosition?: 'left' | 'right';
  colorType?: 'primary' | 'secondary';
  imageRounded?: boolean;
  imageWidth?: number;
  imageHeight?: number;
}

const CustomSection = ({
  title,
  description,
  imageUrl,
  colorType = 'primary',
  imageRounded = false,
  imageWidth = 500,
  imageHeight = 300,
}: CustomSectionProps) => {
  return (
    <div className={`custom-section ${colorType === 'primary' ? 'bg-primary' : 'bg-secondary'}`}>
      {imageUrl && (
        <div className={`custom-image ${imageRounded ? 'custom-image-rounded' : ''}`}>
          <Image src={imageUrl} alt={title} width={imageWidth} height={imageHeight} sizes="100vw" loading="lazy" />
        </div>
      )}
      <div className="custom-content">
        <h2 className="custom-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CustomSection;
