import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="nav-left">
        <Link to="/models">Models</Link>
        <Link to="/culture">Culture</Link>
        <Link to="/lifestyle">Lifestyle</Link>
        <a href="#">Your Bentley</a>
        <a href="#">About Bentley</a>
      </div>

      <div className="logo">
        <Link to="/">
          <img src="https://www.bentleymotors.com/content/dam/bm/websites/bmcom/bentleymotors-com/logos/Simplified%20Negative_BMdotCom_1000x500_2x1.png/_jcr_content/renditions/original./Simplified%20Negative_BMdotCom_1000x500_2x1.png" alt="Bentley Logo" />
        </Link>
      </div>

      <div className="nav-right">
        <button className="outline-btn">Request Test Drive</button>
        <a href="#">Configurator</a>
        <a href="#">Locate Dealer</a>
      </div>
    </header>
  );
};

export default Navbar;
