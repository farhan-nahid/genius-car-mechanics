import React from 'react';
import mechanic1 from '../../../assets/images/mechanic/mechanic-1.jpg';
import mechanic2 from '../../../assets/images/mechanic/mechanic-2.jpg';
import mechanic3 from '../../../assets/images/mechanic/mechanic-3.jpg';
import mechanic4 from '../../../assets/images/mechanic/mechanic-4.jpg';
import mechanic5 from '../../../assets/images/mechanic/mechanic-5.jpg';
import Expert from '../Expert/Expert';

const experts = [
  {
    img: mechanic1,
    name: 'Andrew Smith',
    expertize: '-Engine Expert-',
  },
  {
    img: mechanic2,
    name: 'John Anderson',
    expertize: '-Polish Expert-',
  },
  {
    img: mechanic3,
    name: 'Zakaria Smith',
    expertize: '-Coloring Expert-',
  },
  {
    img: mechanic4,
    name: 'Sakib Anderson',
    expertize: '-Al rounder Expert-',
  },
  {
    img: mechanic5,
    name: 'John Dou',
    expertize: '-Tire Expert-',
  },
];

const Experts = () => {
  return (
    <section className='container section__margin' id='experts'>
      <h2 className='section__title'>Our Experts</h2>
      <div className='grid__container'>
        {
          // map experts
          experts.map((expert, idx) => (
            <Expert key={idx} expert={expert} />
          ))
        }
      </div>
    </section>
  );
};

export default Experts;
