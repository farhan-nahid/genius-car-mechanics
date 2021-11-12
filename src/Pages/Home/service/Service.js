import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Service.css';

const Service = ({ service: { _id, name, price, description, image } }) => {
  const history = useHistory();
  return (
    <div className='card'>
      <img src={image} alt={name} />
      <div className='card__content'>
        <h3>{name}</h3>
        <h5>Price: {price}</h5>
        <p>{description}</p>
        <Button
          variant='warning'
          onClick={() => history.push(`/booking/${_id}`)}
        >
          Book {name.toLowerCase()}
        </Button>
      </div>
    </div>
  );
};

export default Service;
