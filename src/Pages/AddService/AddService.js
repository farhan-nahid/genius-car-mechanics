import axios from 'axios';
import * as React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

const AddService = () => {
  const { loggedInUser } = useAuth();

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    if (loggedInUser.email === 'nahidahmed9933@gmail.com') {
      axios
        .post('https://genius-car--mechanics.herokuapp.com/add-services', data)
        .then((res) => {
          if (res.data) {
            alert('Service Added');
            reset();
          }
        });
    }
  };

  return (
    <Container>
      <h1 className='text-center mb-5'>Add service</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='border p-5 w-75 m-auto shadow my-5'
      >
        <input
          {...register('name', { maxLength: 20 })}
          placeholder='Enter a Name'
          className='form-control'
        />
        <input
          type='number'
          {...register('price')}
          placeholder='Enter Your Price'
          className='form-control my-3'
        />
        <input
          {...register('image')}
          placeholder='Enter a image URL'
          className='form-control'
        />
        <textarea
          {...register('description')}
          placeholder='Enter some Description'
          className='form-control my-3'
          rows='5'
        />
        <input type='submit' className='btn btn-warning' />
      </form>
    </Container>
  );
};

export default AddService;
