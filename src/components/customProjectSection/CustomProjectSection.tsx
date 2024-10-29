import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CustomProjectSectionProps {
  title: string;
  imageUrl?: string;
  colorType?: 'primary' | 'secondary';
  imageRounded?: boolean;
  imageWidth?: number;
  imageHeight?: number;
  link?: string;
  children: React.ReactNode;
}

const CustomProjectSection = ({
  title,
  imageUrl,
  colorType = 'primary',
  imageRounded = false,
  imageWidth = 500,
  imageHeight = 300,
  link,
  children,
}: CustomProjectSectionProps) => {
  return (
    <div className={`custom-project-section`}>
      <Link href={link || '#'}>
        {imageUrl && (
          <div className={`custom-project-image ${imageRounded ? 'custom-project-image-rounded' : ''}`}>
            <Image src={imageUrl} alt={title} width={imageWidth} height={imageHeight} sizes="100vw" loading="lazy" />
          </div>
        )}
        <div className="custom-project-content">
          <h2 className="custom-project-title">{title}</h2>
          {children}
        </div>
      </Link>
      <hr className="custom-project-separator" />
    </div>
  );
};

export default CustomProjectSection;
