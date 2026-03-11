import React from 'react';

const About = () => {
  return (
    <section className="bentley-about">
      <div className="bentley-container">
        <h2>Bentley Motors</h2>

        <p>
          From W.O. Bentley, who founded Bentley Motors in 1919, to the current team
          of over 4,000 dedicated employees, the company’s extraordinary cars have
          always been designed and built by exceptional people using only the finest
          of materials. They have always been driven by exceptional people, too.
          From the passionate Bentley Boys and Girls who raced the cars in the 1920s,
          encouraging W.O. Bentley to achieve ever greater feats of engineering, to
          the visionary Bentley owners of today, Bentley drivers help to shape the
          world around them.
        </p>

        <p>
          In 2020 Bentley Motors launched the ‘Beyond100’ manifesto, which outlines
          our intention to become the most sustainable luxury automotive brand in
          the world. As a brand we are constantly looking forwards, using the links
          below you will find our technological innovations and future vision for
          Bentley.
        </p>

        <div className="bentley-buttons">
          <a href="#" className="btn primary">ABOUT BENTLEY</a>
          <a href="#" className="btn outline">CREATE YOUR OWN BENTLEY</a>
        </div>
      </div>
    </section>
  );
};

export default About;
