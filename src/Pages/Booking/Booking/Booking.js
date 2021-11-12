import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router';

const Booking = () => {
  const [service, setService] = useState({});
  const { serviceId } = useParams();

  useEffect(() => {
    axios
      .get(`https://genius-car--mechanics.herokuapp.com/service/${serviceId}`)
      .then((res) => setService(res.data))
      .catch((err) => toast.error('Something Went Wrong'));
  }, [serviceId]);
  return (
    <div>
      <h2>This is {serviceId}</h2>
      <h3>{service.name}</h3>
    </div>
  );
};

export default Booking;
