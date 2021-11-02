import React from 'react';
import './Service.css';

const Service = ({ service: { name, price, description, img } }) => {
  return (
    <div className='card'>
      <img src={img} alt={name} />
      <div className='card__content'>
        <h3>{name}</h3>
        <h5>Price: {price}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Service;
