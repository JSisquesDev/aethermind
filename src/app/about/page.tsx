import AboutSection from '@/components/aboutSection/AboutSection';
import React from 'react';

const About = () => {
  return (
    <main className="about-container">
      <AboutSection title="Nuestra Misión">
        <p>
          En <strong>JSisquesDev</strong>, nuestra misión es desarrollar soluciones innovadoras que potencien la productividad y la creatividad de
          nuestros clientes. Creemos que la tecnología debe ser accesible y útil para todos, y trabajamos cada día para hacer de esto una realidad.
        </p>
      </AboutSection>
      <AboutSection title="Quiénes Somos">
        <p>
          Somos un equipo apasionado de <em>desarrolladores</em>, <em>diseñadores</em> y <em>pensadores creativos</em>. Cada miembro de nuestro equipo
          trae una mezcla única de habilidades y experiencias, lo que nos permite abordar cada proyecto desde diferentes ángulos. Nos unimos por una
          visión común: crear software que resuelva problemas reales y mejore la vida de las personas.
        </p>
      </AboutSection>
      <AboutSection title="Nuestros Valores">
        <ul className="values-list">
          <li>
            <strong>Innovación:</strong> Estamos comprometidos a utilizar las últimas tecnologías y métodos para ofrecer soluciones que no solo
            cumplan, sino que superen las expectativas.
          </li>
          <li>
            <strong>Colaboración:</strong> Creemos en el poder del trabajo en equipo. Fomentamos un entorno donde las ideas fluyan y todos se sientan
            valorados.
          </li>
          <li>
            <strong>Transparencia:</strong> Nos esforzamos por mantener una comunicación clara y honesta con nuestros clientes y dentro de nuestro
            equipo.
          </li>
          <li>
            <strong>Calidad:</strong> Nos comprometemos a ofrecer productos y servicios de la más alta calidad, garantizando la satisfacción del
            cliente en cada proyecto.
          </li>
        </ul>
      </AboutSection>
      <AboutSection title="Únete a Nuestro Viaje">
        <p>
          Estamos emocionados por el futuro y por la oportunidad de colaborar contigo. Juntos, podemos hacer que las ideas cobren vida y transformar
          el mundo a través de la tecnología.
        </p>
      </AboutSection>
    </main>
  );
};

export default About;
