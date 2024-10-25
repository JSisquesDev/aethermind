import React from 'react';

interface CustomTitleProps {
  text: string;
  size?: 'text-sm' | 'text-md' | 'text-lg' | 'text-xl' | 'text-2xl' | 'text-3xl';
  alignment?: 'text-left' | 'text-center' | 'text-right';
  icon?: React.ReactNode;
}

const CustomTitle = ({ text, size = 'text-xl', alignment = 'text-left', icon }: CustomTitleProps) => {
  return (
    <div className="custom-title-container">
      {icon && <span className="icon">{icon}</span>}
      <h1 className="custom-title">{text}</h1>
    </div>
  );
};

export default CustomTitle;
