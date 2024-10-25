'use client';

import { useState } from 'react';
import CustomInput from '@/components/form/customInput/CustomInput';
import CustomButton from '@/components/customButton/CustomButton';
import CustomTextArea from '@/components/form/customTextArea/CustomTextArea';
import CustomCheckbox from '@/components/form/customCheckbox/CustomCheckbox';
import CustomTitle from '@/components/customTitle/CustomTitle';
import FormDescription from '@/components/form/formDescription/FormDescription';
import { validateForm, validateField } from '@/util/validateForm';
import { FaEnvelope } from 'react-icons/fa6';
import logMessage from '@/util/logger';
import sendEmail from '@/util/emailManager';
import axiosInstance from '@/config/axiosConfig';
import fetchManager from '@/util/fetchManager';

/**
 * Componente de formulario de contacto.
 * Permite a los usuarios enviar un mensaje a través de un formulario.
 */
const ContactForm = () => {
  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    acceptPrivacyPolicy: false,
  });

  // Estado para almacenar los errores de validación del formulario
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
    message: false,
    acceptPrivacyPolicy: false,
  });

  /**
   * Maneja el cambio en los campos de entrada del formulario.
   * @param {React.ChangeEvent<HTMLInputElement>} e - Evento de cambio del campo de entrada.
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: !validateField(name, value),
    });
  };

  /**
   * Maneja el envío del formulario.
   * @param {React.FormEvent} e - Evento de envío del formulario.
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted', formData);
    fetchManager.post('/contact', formData);
  };

  /**
   * Maneja el cambio en el campo de área de texto del formulario.
   * @param {React.ChangeEvent<HTMLTextAreaElement>} e - Evento de cambio del área de texto.
   */
  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: !validateField(name, value),
    });
  };

  /**
   * Maneja el cambio en el campo de checkbox del formulario.
   * @param {React.ChangeEvent<HTMLInputElement>} e - Evento de cambio del checkbox.
   */
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
    setErrors({
      ...errors,
      [name]: !validateField(name, checked),
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <CustomTitle text="Contacto" icon={<FaEnvelope />} />
        <FormDescription text="Dejanos un mensaje y te responderemos lo antes posible" />
        <CustomInput label="Nombre" type="text" name="name" value={formData.name} onChange={handleChange} required />
        {errors.name && <p className="error-text">El nombre es obligatorio</p>}
        <CustomInput label="Email" type="email" name="email" value={formData.email} onChange={handleChange} required />
        {errors.email && <p className="error-text">El email es obligatorio y debe ser válido</p>}
        <CustomInput label="Telefono" type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        {errors.phone && <p className="error-text">El teléfono es obligatorio y debe ser válido</p>}
        <CustomTextArea label="Mensaje" name="message" value={formData.message} onChange={handleTextAreaChange} required />
        {errors.message && <p className="error-text">El mensaje es obligatorio</p>}
        <CustomCheckbox
          label="Acepto la politica de privacidad"
          name="acceptPrivacyPolicy"
          checked={formData.acceptPrivacyPolicy}
          onChange={handleCheckboxChange}
        />
        {errors.acceptPrivacyPolicy && <p className="error-text">Debes aceptar la política de privacidad</p>}
        <div className="form-button-container">
          <CustomButton type="submit" text="Enviar" disabled={!validateForm(formData)} />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
