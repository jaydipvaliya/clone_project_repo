import React from 'react';
import { Link } from 'react-router-dom';
import './Lifestyle.css';

const Lifestyle = () => {
  return (
    <div className="lifestyle-page">
      <header className="navbar">
        <div className="nav-left">
          <Link to="/models">MODELS</Link>
          <Link to="/culture">CULTURE</Link>
          <Link to="/lifestyle" className="active">LIFESTYLE</Link>
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

      <main className="container">
        <aside className="sidebar">
          <h1>Bentley<br />Lifestyle</h1>

          <ul>
            <li className="active-item">ARCHITECTURE AND DESIGN</li>
            <li>MUSIC AND AUDIO</li>
            <li>AUTOMOTIVE</li>
            <li>BENTLEY COLLECTION</li>
          </ul>
        </aside>

        <section className="hero">
          <div className="overlay">
            <h2>Bentley Lifestyle</h2>
            <p>
              Join us in sculpting a life where each moment is a masterpiece,
              and the pursuit of perfection knows no bounds.
            </p>
            <button className="btn-outline white">EXPLORE</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Lifestyle;
