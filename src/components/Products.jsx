import React from 'react';
import { productImg, commentImg } from '../assets';
import { company } from '../constant';
import { FaArrowRightLong } from 'react-icons/fa6';

const Products = () => {
  return (
    <section>
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
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
      <div className="bg-neutralSilver px-4 lg:px-14 max-w-screen-2xl mx-auto py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/3">
            <img src={commentImg} alt="comment" />
          </div>
          <div className="md:w-2/3 mx-auto">
            <div>
              <p className="md:w-4/5 text-sm text-neutralGrey mb-8 leading-7">
                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
                lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin
                eu enim metus. Vivamus sed libero ornare, tristique quam in,
                gravida enim. Nullam ut molestie arcu, at endrerit elit. Morbi
                laoreet elit at ligula molestie, nec molestie mi blandit.
                Suspendisse cursus tellus sed augue ultrices, quis tristique
                nulla sodales. Suspendisse eget lorem eu turpis vestibulum
                pretium. Suspendisse potenti. Quisque malesuada enim sapien,
                vitae placerat ante feugiat eget. Quisque vulputate odio neque,
                eget efficitur libero condimentum id. Curabitur id nibh id sem
                dignissim finibus ac sit amet magna.
              </p>
              <h5 className="text-brandPrimary text-xl font-semibold mb-1">
                Tim Smith
              </h5>
              <p className="text-neutralGrey text-base">
                British Dragon Boat Racing Association
              </p>
              <div>
                <div className="flex flex-wrap items-center gap-8 mt-8">
                  {company.map((item) => {
                    return (
                      <div key={item.alt}>
                        <img src={item.img} alt={item.alt} />
                      </div>
                    );
                  })}
                  <div className="flex font-bold items-center gap-2 text-brandPrimary hover:underline">
                    <a href="/">
                      Meet all customers
                    </a>
                    <FaArrowRightLong size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
