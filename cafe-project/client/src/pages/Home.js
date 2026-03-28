import React from 'react';
import Hero from '../components/Hero/Hero';
import FlashSales from '../components/FlashSales/FlashSales';
import Featured from '../components/Featured/Featured';
import BestSelling from '../components/BestSelling/BestSelling';
import MusicBanner from '../components/MusicBanner/MusicBanner';
import ExploreProducts from '../components/ExploreProducts/ExploreProducts';

const Home = () => {
  return (
    <main>
      <Hero />
      <FlashSales />
       <BestSelling />
       <MusicBanner />
       <ExploreProducts />
      <Featured />
    </main>
  );
};

export default Home;