/* eslint-disable react/prop-types */
import React from 'react';

const CarouselItem = ({ img, alt, title, span, desc }) => {
  return (
    <div className="my-12 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
      <div className="hidden md:block">
        <img src={img} alt={alt} />
      </div>
      <div className="md:w-1/2">
        <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
          {title} <span className="text-brandPrimary leading-snug">{span}</span>
        </h1>
        <p className="text-base text-neutralGrey mb-8">{desc}</p>
        <button className="btn-primary">Register</button>
      </div>
    </div>
  );
};

export default CarouselItem;
