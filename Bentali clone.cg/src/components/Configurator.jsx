import React from 'react';

const Configurator = () => {
  return (
    <section className="configurator-section">
      <div className="config-overlay"></div>

      <div className="config-card">
        <span className="config-eyebrow">Explore</span>

        <h2>Configure your perfect car</h2>

        <p>
          Limited only by your imagination, here you can configure your
          perfect Bentley using the Official Bentley configurator.
        </p>

        <a href="#" className="config-btn">
          CREATE YOUR OWN
        </a>
      </div>
    </section>
  );
};

export default Configurator;
