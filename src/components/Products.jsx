import React from 'react';
import { productImg, commentImg } from '../assets';

const Products = () => {
  return (
    <section>
      <div
        className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8"
        id="products"
      >
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <img src={productImg} alt="about" />
          </div>
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
              How to design your site footer like we did
            </h2>
            <p className="md:w-3/4 text-sm text-neutralGrey mb-8">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at libero ultrices
              mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
              dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
              ultricies, non aliquet urna tincidunt. Integer et nisi ac,
              hendrerit venenatis libero. Donec consectetur faucibus ipsum id
              gravida.
            </p>
            <button className="btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
