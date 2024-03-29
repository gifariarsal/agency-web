import React from 'react';
import { company, services } from '../constant';

const Services = () => {
  return (
    <section
      id="services"
      className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto"
    >
      <div className="text-center my-8">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">
          Our Clients
        </h2>
        <p className="text-neutralGrey">
          We have been working with some of the best clients.
        </p>
        <div className="my-12 flex flex-wrap justify-between items-center gap-8">
          {company.map((item) => {
            return (
              <div key={item.alt}>
                <img src={item.img} alt={item.alt} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="text-center mx-auto mt-20 md:w-1/2">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">
          Manage your entire community in a single system
        </h2>
        <p className="text-neutralGrey">Who is Nextcent suitable for?</p>
      </div>
      <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex items-center justify-center px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-3 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 h-full"
          >
            <div>
              <div className="mb-4 h-14 w-14 mx-auto">
                <img src={service.img} alt={service.title} />
              </div>
              <h4 className="text-2xl font-bold text-neutralDGrey mb-2 px-2">
                {service.title}
              </h4>
              <p className="text-neutralGrey text-sm">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
