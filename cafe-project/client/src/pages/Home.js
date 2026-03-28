import React from 'react';
import Hero from '../components/Hero/Hero';
import FlashSales from '../components/FlashSales/FlashSales';
import Featured from '../components/Featured/Featured';

const Home = () => {
  return (
    <main>
      <Hero />
      <FlashSales />
      <Featured />
    </main>
  );
};

export default Home;