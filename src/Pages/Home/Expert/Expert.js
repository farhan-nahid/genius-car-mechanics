import React from 'react';

const Expert = ({ expert: { img, name, expertize } }) => {
  return (
    <div className='card'>
      <img src={img} alt={name} />
      <div className='card__content'>
        <h3>{name}</h3>
        <h5 className='text-danger'>{expertize}</h5>
      </div>
    </div>
  );
};

export default Expert;
