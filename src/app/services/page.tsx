'use client';

import ServiceSection from '@/components/serviceSection/ServiceSection';
const ServicesPage = () => {
  return (
    <main>
      <ServiceSection
        title="Creación de sitios web"
        description="Creamos sitios web personalizados para tu negocio, utilizando las últimas tecnologías y estándares de la industria."
        imageUrl="/images/service1.jpg"
        imagePosition="left"
        colorType="primary"
      />
      <ServiceSection
        title="Desarrollo de API REST"
        description="Desarrollo de API REST para tu negocio, utilizando las últimas tecnologías y estándares de la industria."
        imageUrl="/images/service2.jpg"
        imagePosition="right"
        colorType="secondary"
      />
      <ServiceSection
        title="Consultoría tecnológica"
        description="Ofrecemos consultoría tecnológica para ayudarte a elegir las mejores herramientas y estrategias para tu negocio."
        imageUrl="/images/service3.jpg"
        imagePosition="left"
        colorType="primary"
      />
      <ServiceSection
        title="Automatización de procesos"
        description="Automatizamos procesos para tu negocio, utilizando las últimas tecnologías y estándares de la industria."
        imageUrl="/images/service4.jpg"
        imagePosition="right"
        colorType="secondary"
      />
      <ServiceSection
        title="Mantenimiento y soporte técnico"
        description="Mantenemos tu sitio web y tus aplicaciones funcionando correctamente, utilizando las últimas tecnologías y estándares de la industria."
        imageUrl="/images/service5.jpg"
        imagePosition="left"
        colorType="primary"
      />
    </main>
  );
};

export default ServicesPage;
