import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Links from '../components/Links';
import MullinerHero from '../components/MullinerHero';
import Configurator from '../components/Configurator';
import AboutBentley from '../components/AboutBentley';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Links />
      <MullinerHero />
      <Configurator />
      <AboutBentley />
    </>
  );
};

export default Home;
