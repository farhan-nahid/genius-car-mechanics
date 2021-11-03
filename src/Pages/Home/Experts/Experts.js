import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import toast from 'react-hot-toast';
import Expert from '../Expert/Expert';

const Experts = () => {
  const [experts, setExperts] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://raw.githubusercontent.com/farhan-nahid/genius-car-mechanics-client/main/src/assets/fakeData/experts.json'
      )
      .then((res) => setExperts(res.data))
      .catch((err) => toast.error(err.message));
  }, []);

  return (
    <section className='container section__margin' id='experts'>
      <h2 className='section__title'>Our Experts</h2>
      {experts.length ? (
        <div className='grid__container'>
          {
            // map experts
            experts.map((expert, idx) => (
              <Expert key={idx} expert={expert} />
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

export default Experts;
