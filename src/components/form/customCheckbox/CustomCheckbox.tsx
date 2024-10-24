'use client';

import React from 'react';

interface CheckboxProps {
  label: string;
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomCheckbox = ({ label, name, checked, onChange }: CheckboxProps) => {
  return (
    <div className="custom-checkbox-container">
      <input type="checkbox" name={name} id={name} checked={checked} onChange={onChange} className="custom-checkbox" />
      <label htmlFor={name} className="custom-checkbox-label">
        {label}
      </label>
    </div>
  );
};

export default CustomCheckbox;
