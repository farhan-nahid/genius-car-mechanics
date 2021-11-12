import axios from 'axios';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const useServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    axios
      .get('https://genius-car--mechanics.herokuapp.com/all-services')
      .then((res) => setServices(res.data))
      .catch((err) => toast.error(err.message));
  }, []);
  return [services, setServices];
};

export default useServices;
