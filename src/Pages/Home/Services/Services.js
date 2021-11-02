import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Service from '../service/Service';
import './Services.css';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/farhan-nahid/genius-car-mechanics-client/main/src/assets/fakeData/services.json'
    )
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <section className='container section__margin'>
      <h2 className='section__title'>Our Services</h2>
      {services.length ? (
        <div className='grid__container '>
          {
            // map data
            services.map((service) => (
              <Service key={service.id} service={service} />
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
