import React from 'react';

interface FormDescriptionProps {
  text: string;
}

const FormDescription = ({ text }: FormDescriptionProps) => {
  return (
    <div className="form-description">
      <p className="form-description-text">{text}</p>
    </div>
  );
};

export default FormDescription;
