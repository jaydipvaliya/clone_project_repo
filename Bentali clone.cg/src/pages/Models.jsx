import React from 'react';
import { Link } from 'react-router-dom';
import './Models.css';

const Models = () => {
  const cars = [
    {
      id: 1,
      name: "Bentayga",
      type: "Petrol · Hybrid",
      img: "https://www.bentleymotors.com/content/dam/bm/websites/bmcom/bentleymotors-com/models/26my/bentayga-speed/Navigation%20Side.png/_jcr_content/renditions/original.image_file.228.114.file/Navigation%20Side.png",
      active: true
    },
    {
      id: 2,
      name: "Flying Spur",
      type: "Performance Hybrid",
      img: "https://www.bentleymotors.com/content/dam/bm/websites/bmcom/bentleymotors-com/navigation/model-nav/model-range/Spur%20Mulliner%20side%20profile%20v2.png/_jcr_content/renditions/original.image_file.228.114.file/Spur%20Mulliner%20side%20profile%20v2.png"
    },
    {
      id: 3,
      name: "Continental GT",
      type: "Performance Hybrid",
      img: "https://www.bentleymotors.com/content/dam/bm/websites/bmcom/bentleymotors-com/models/25my/25my-gt/GT%20Speed%20Side%20Profile%20v2.png/_jcr_content/renditions/original.image_file.228.114.file/GT%20Speed%20Side%20Profile%20v2.png"
    }
  ];

  return (
    <div className="models-page">
      <header className="navbar">
        <div className="nav-left">
          <Link to="/models">MODELS</Link>
          <Link to="/culture">CULTURE</Link>
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

      <div className="main">
        <aside className="sidebar">
          {cars.map(car => (
            <div className={`car ${car.active ? 'active' : ''}`} key={car.id}>
              {car.img && <img src={car.img} alt={car.name} />}
              <div>
                <h4>{car.name}</h4>
                {car.type && <p>{car.type}</p>}
              </div>
            </div>
          ))}
          <div className="car">
            <h4>MULLINER</h4>
          </div>
          <div className="car">
            <h4>Concept Cars</h4>
          </div>
        </aside>

        <section className="content">
          <h1>Bentayga</h1>
          <p className="desc">
            No other SUV can compete with the Bentayga when it comes to craftsmanship,
            comfort or sheer exhilaration.
          </p>

          <button className="btn-outline">EXPLORE</button>

          <ul className="actions">
            <li>Create your own</li>
            <li>Enquire to buy</li>
            <li>Request a test drive</li>
            <li>Accessories</li>
          </ul>
        </section>

        <section className="image-section">
          <img src="https://www.bentleymotors.com/content/dam/bm/websites/bmcom/bentleymotors-com/models/26my/bentayga-speed/Navigation%20Front.png/_jcr_content/renditions/original.image_file.1074.537.file/Navigation%20Front.png" alt="Bentayga Front" />
        </section>
      </div>
    </div>
  );
};

export default Models;
