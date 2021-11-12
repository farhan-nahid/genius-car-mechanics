import React from 'react';
import { Spinner } from 'react-bootstrap';
import useServices from '../../../hooks/useServices';
import Service from '../service/Service';
import './Services.css';

const Services = () => {
  const [services] = useServices();

  return (
    <section className='container section__margin' id='services'>
      <h2 className='section__title'>Our Services</h2>
      {services.length ? (
        <div className='grid__container '>
          {
            // map data
            services.map((service) => (
              <Service key={service._id} service={service} />
            ))
          }
        </div>
      ) : (
        <span className='my-5 d-flex justify-content-center py-5'>
          <Spinner animation='border' role='status' />
        </span>
      )}
    </section>
  );
};

export default Services;
