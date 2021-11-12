import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React from 'react';
import { Container, Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import useServices from '../../hooks/useServices';

const ManageService = () => {
  const [services, setServices] = useServices();
  const { loggedInUser } = useAuth();

  const handelEdit = (id) => {
    console.log(id);
  };

  const handelDelete = (id) => {
    if (loggedInUser.email === 'nahidahmed9933@gmail.com') {
      axios
        .delete(`https://genius-car--mechanics.herokuapp.com/service/${id}`)
        .then((res) => {
          const remaining = services.filter((service) => service._id !== id);
          setServices(remaining);
          alert('Delete The Service');
        });
    }
  };

  return (
    <Container>
      <h1 className='text-center mb-5'>This is Manage Service</h1>
      {services?.length ? (
        <Table striped bordered hover size='sm' className='text-center'>
          <thead>
            <tr>
              <th className='p-2 bold'>#</th>
              <th className='p-2 bold'>Service Name</th>
              <th className='p-2 bold'>Service Price</th>
              <th className='p-2 bold'>Edit</th>
              <th className='p-2 bold'>Delete</th>
            </tr>
          </thead>
          {services.map((service, idx) => {
            return (
              <tbody key={service._id}>
                <tr>
                  <td className='p-2'>{idx + 1}</td>
                  <td className='p-2'>{service.name}</td>
                  <td className='p-2'>{service.price}</td>
                  <td className='p-2 '>
                    <span
                      onClick={() => handelEdit(service._id)}
                      style={{ cursor: 'pointer' }}
                      className='text-success'
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </span>
                  </td>
                  <td className='p-2 '>
                    <span
                      onClick={() => handelDelete(service._id)}
                      style={{ cursor: 'pointer' }}
                      className='text-danger'
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </span>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </Table>
      ) : (
        'Loading'
      )}
    </Container>
  );
};

export default ManageService;
