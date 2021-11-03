import React from 'react';
import { Button, Form } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
  const { signInUsingGoogle } = useAuth();
  const history = useHistory();
  const location = useLocation();
  console.log(location);
  const redirect_URI = location.state?.from || '/';

  const handelGoogleSignIn = () => {
    signInUsingGoogle()
      .then(() => history.push(redirect_URI))
      .catch((err) => toast.error(err.message));
    // .finally()
  };

  return (
    <section className='container'>
      <div className='section__margin border w-75 p-5 rounded shadow'>
        <Form>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type='email' placeholder='Enter email' />
            <Form.Text className='text-muted'>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Password' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicCheckbox'>
            <Form.Check type='checkbox' label='Check me out' />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Log In
          </Button>
        </Form>
      </div>
      <div className='text-center section__margin'>
        <Button variant='warning' onClick={handelGoogleSignIn}>
          Google Sign In
        </Button>
      </div>
    </section>
  );
};

export default Login;
