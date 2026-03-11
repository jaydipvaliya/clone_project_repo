import React from 'react';

const Links = () => {
  const linkCards = [
    {
      img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738",
      title: "Models",
      text: "Explore the Bentley Motors model range."
    },
    {
      img: "https://images.unsplash.com/photo-1502877338535-766e1452684a",
      title: "Pre-Owned Bentley",
      text: "Discover our range of exceptional Pre-Owned cars."
    },
    {
      img: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
      title: "Accessories",
      text: "Make your Bentley even more personal."
    },
    {
      img: "https://images.unsplash.com/photo-1583267746897-2cf415887172",
      title: "Factory Experiences",
      text: "Explore the home of Bentley."
    }
  ];

  return (
    <section className="bentley-links">
      <div className="links-wrapper">
        {linkCards.map((card, index) => (
          <div className="link-card" key={index}>
            <img src={card.img} alt={card.title} />
            <div className="card-content">
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Links;
