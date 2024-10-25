'use client';

import React from 'react';

interface TextAreaProps {
  label: string;
  name: string;
  value: string;
  rows?: number;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
}

const CustomTextArea = ({ label, name, value, rows = 3, onChange, required = false }: TextAreaProps) => {
  return (
    <div className="custom-textarea-container">
      <label className="custom-textarea-label" htmlFor={name}>
        {label} {required && <span className="required-indicator">*</span>}
      </label>
      <textarea name={name} id={name} rows={rows} value={value} onChange={onChange} className="custom-textarea" required={required} />
    </div>
  );
};

export default CustomTextArea;
