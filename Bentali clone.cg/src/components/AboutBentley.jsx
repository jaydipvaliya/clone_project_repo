import React from 'react';

const AboutBentley = () => {
  return (
    <section className="about-bentley">
      <div className="about-container">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9"
            alt="Bentley Heritage"
          />
        </div>

        <div className="about-content">
          <h2>About Bentley</h2>

          <p>
            Bentley is on an extraordinary journey into the future – a future in
            which sustainability will be paramount. We have made significant leaps
            forward, from concept cars featuring electric powertrains to launches
            of Bentley hybrid vehicles.
          </p>

          <div className="about-buttons">
            <a href="#" className="btn primary">EXPLORE</a>
            <a href="#" className="btn outline">KEEP ME INFORMED</a>
          </div>
        </div>
      </div>

      <div className="about-footer">
        <a href="#">NEWSLETTER</a>
        <a href="#">CONFIGURATOR</a>
        <span className="brand">BENTLEY</span>
        <a href="#">LOCATE DEALER</a>
        <a href="#">DOWNLOAD BROCHURE</a>
      </div>
    </section>
  );
};

export default AboutBentley;
