import React from 'react';
import { Carousel } from 'flowbite-react';
import { carousel } from '../constant';
import CarouselItem from './CarouselItem';

const Home = () => {
  return (
    <section id="home" className="bg-neutralSilver">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
        <Carousel className="w-full mx-auto">
          {carousel.map((item) => {
            return <CarouselItem key={item.id} {...item} />;
          })}
        </Carousel>
      </div>
    </section>
  );
};

export default Home;
