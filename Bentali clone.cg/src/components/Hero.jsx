import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="overlay"></div>

      <div className="hero-content">
        <span className="slide-indicator">3 / 8</span>

        <h1>Continental<br /><span>GTC Azure</span></h1>

        <p>
          Designed for maximum comfort, the Continental GTC Azure
          represents an extraordinary leap forward in convertible luxury.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">Explore</button>
          <button className="secondary-btn">Create Your Own</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
