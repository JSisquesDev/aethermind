interface FormData {
  [key: string]: any;
}

export const validateField = (field: string, value: any): boolean => {
  switch (field) {
    case 'name':
      return value.trim().length > 0;
    case 'email':
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(value);
    case 'phone':
      const phoneRegex = /^\+?[1-9]\d{1,14}$/;
      return phoneRegex.test(value);
    case 'message':
      return value.trim().length > 0;
    case 'acceptPrivacyPolicy':
      return value === true;
    default:
      return true;
  }
};

export const validateForm = (formData: FormData): boolean => {
  return Object.keys(formData).every(key => validateField(key, formData[key]));
};
