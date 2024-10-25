'use client';

import CustomSection from '@/components/customSection/CustomSection';

const ServicesPage = () => {
  return (
    <main>
      <CustomSection
        title="Creación de sitios web"
        description="Servicio de desarrollo completo de sitios web personalizados, desde páginas informativas hasta tiendas en línea o aplicaciones web complejas. Nos encargamos de la planificación, diseño UX/UI, desarrollo y optimización para ofrecer experiencias de usuario atractivas y funcionales. Utilizamos las últimas tecnologías web, asegurando una estructura escalable y un diseño adaptable a dispositivos móviles, optimizado para SEO y con tiempos de carga rápidos."
        imageUrl="/images/service1.jpg"
        colorType="primary"
      />
      <CustomSection
        title="Desarrollo de API REST"
        description="Diseñamos y desarrollamos APIs RESTful seguras y escalables para conectar aplicaciones de forma eficiente. Con un enfoque en arquitectura robusta y facilidad de integración, nuestras APIs permiten que las plataformas de nuestros clientes se comuniquen con otros sistemas, simplificando el intercambio de datos y garantizando un rendimiento óptimo. Nos encargamos del diseño de los endpoints, la documentación y las pruebas, asegurando una implementación eficaz y fácil de mantener."
        imageUrl="/images/service2.jpg"
        imagePosition="right"
        colorType="secondary"
      />
      <CustomSection
        title="Consultoría tecnológica"
        description="Asesoramos a empresas y emprendedores en la identificación y selección de las tecnologías más adecuadas para sus proyectos. A través de análisis y diagnósticos personalizados, ayudamos a optimizar sus procesos y alcanzar sus objetivos de forma estratégica, evaluando opciones en función de sus recursos y necesidades específicas. Desde infraestructura y metodologías ágiles hasta recomendaciones sobre herramientas y software, ofrecemos una guía completa para maximizar el potencial tecnológico."
        imageUrl="/images/service3.jpg"
        colorType="primary"
      />
      <CustomSection
        title="Automatización de procesos"
        description="Automatizamos tareas repetitivas y procesos críticos para optimizar la eficiencia y reducir costes. Implementamos soluciones de automatización a medida que integran sistemas y herramientas clave, permitiendo a las empresas concentrarse en tareas de alto valor. Desde la automatización de flujos de trabajo hasta la creación de scripts de integración, ayudamos a mejorar la productividad minimizando errores y aumentando la agilidad en las operaciones diarias."
        imageUrl="/images/service4.jpg"
        imagePosition="right"
        colorType="secondary"
      />
      <CustomSection
        title="Mantenimiento y soporte técnico"
        description="Ofrecemos un servicio completo de mantenimiento y soporte técnico para garantizar el funcionamiento continuo y la actualización de sistemas y aplicaciones. Desde la resolución de incidencias hasta la implementación de mejoras y actualizaciones de seguridad, nuestro equipo está disponible para asistir a los clientes en todo momento. Este servicio es ideal para empresas que buscan reducir el tiempo de inactividad, optimizar el rendimiento y asegurar la estabilidad de sus plataformas tecnológicas."
        imageUrl="/images/service5.jpg"
        colorType="primary"
      />
    </main>
  );
};

export default ServicesPage;
