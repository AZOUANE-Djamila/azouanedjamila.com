import React from 'react';

const Hero = ({ title, subtitle, description }) => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p>{description}</p>
      </div>
    </section>
  );
};

export default Hero;
