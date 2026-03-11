import React from 'react';
import { Link } from 'react-router-dom';
import './Culture.css';

const Culture = () => {
  return (
    <div className="culture-page">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="nav-left">
          <Link to="/models">MODELS</Link>
          <Link to="/culture" className="active">CULTURE</Link>
          <Link to="/lifestyle">LIFESTYLE</Link>
          <a href="#">YOUR BENTLEY</a>
          <a href="#">ABOUT BENTLEY</a>
        </div>

        <div className="logo">
          <Link to="/">
            <img src="https://www.bentleymotors.com/content/dam/bm/websites/bmcom/bentleymotors-com/logos/Simplified%20Positive_BMdotCom_1000x500_2x1.png/_jcr_content/renditions/original./Simplified%20Positive_BMdotCom_1000x500_2x1.png" alt="Bentley" />
          </Link>
        </div>

        <div className="nav-right">
          <button className="btn-outline">REQUEST TEST DRIVE</button>
          <a href="#">CONFIGURATOR</a>
          <a href="#">LOCATE DEALER</a>
        </div>
      </header>

      {/* MAIN */}
      <main className="container">
        {/* LEFT MENU */}
        <aside className="left-menu">
          <h1>Culture</h1>
          <ul>
            <li className="menu-active">LATEST ARTICLES</li>
            <li>EVENTS</li>
          </ul>
        </aside>

        {/* HERO */}
        <section className="hero">
          <div className="hero-overlay">
            <h2>Culture</h2>
            <p>
              Explore the extraordinary world of Bentley through immersive experiences that celebrate our heritage,
              innovation, and design leadership. From interactive timelines and iconic past models to exclusive
              collaborations in fashion, design, gaming, and motorsport—every facet of the Bentley brand tells a
              story of performance, luxury, and craftsmanship.
            </p>
            <button className="btn-outline white">EXPLORE</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Culture;
