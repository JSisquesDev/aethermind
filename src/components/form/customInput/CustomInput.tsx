'use client';

import React from 'react';

interface InputProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const CustomInput: React.FC<InputProps> = ({ label, type, name, value, onChange, required = false }) => {
  return (
    <div className="custom-input-container">
      <label className="custom-input-label" htmlFor={name}>
        {label} {required && <span className="required-indicator">*</span>}
      </label>
      <input type={type} name={name} id={name} value={value} onChange={onChange} className="custom-input" required={required} />
    </div>
  );
};

export default CustomInput;
