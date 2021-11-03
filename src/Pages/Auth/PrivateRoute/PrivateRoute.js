import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
  const { loggedInUser, isLoading } = useAuth();

  return (
    <>
      {!isLoading ? (
        <Route
          {...rest}
          render={({ location }) =>
            loggedInUser ? (
              children
            ) : (
              <Redirect
                to={{ pathname: '/login', state: { from: location } }}
              />
            )
          }
        />
      ) : (
        <span className='my-5 d-flex justify-content-center py-5'>
          <Spinner animation='border' role='status' />
        </span>
      )}
    </>
  );
};

export default PrivateRoute;
