import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import './NavBar.css';

const NavBar = () => {
  const { logOut, loggedInUser } = useAuth();
  return (
    <nav>
      <Navbar expand='lg'>
        <div className='container'>
          <Navbar.Brand as={NavLink} to='/'>
            Genius Car Mechanics
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link as={HashLink} to='/home#home'>
                Home
              </Nav.Link>
              <Nav.Link as={HashLink} to='/home#services'>
                Services
              </Nav.Link>
              <Nav.Link as={HashLink} to='/home#experts'>
                Experts
              </Nav.Link>
              <Nav.Link as={NavLink} to='/booking/:id'>
                Booking
              </Nav.Link>
              {!loggedInUser ? (
                <Nav.Link as={NavLink} to='/login'>
                  Login
                </Nav.Link>
              ) : (
                <>
                  <Nav.Link>{loggedInUser.displayName}</Nav.Link>
                  <Nav.Link>
                    <Button onClick={logOut} variant='danger'>
                      LogOut
                    </Button>
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      {/* <Navbar collapseOnSelect expand='lg'>
        <div className='container'>
          <Navbar.Brand href='#home'>Genius</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className='justify-content-end'>
            <Nav.Link as={HashLink} to='/home#home'>
              Home
            </Nav.Link>
            <Nav.Link as={HashLink} to='/home#services'>
              Services
            </Nav.Link>
            <Nav.Link as={HashLink} to='/home#experts'>
              Experts
            </Nav.Link>

             <Button onClick={logOut} variant='light'>
              Logout
            </Button> 

            <Nav.Link as={NavLink} to='/login'>
              Login
            </Nav.Link>

            <Navbar.Text>Signed in as:</Navbar.Text>
          </Navbar.Collapse>
        </div>
      </Navbar> */}
    </nav>
  );
};

export default NavBar;
