import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav>
      <Navbar expand='lg'>
        <div className='container'>
          <Navbar.Brand as={NavLink} to='/'>
            React-Bootstrap
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
              <Nav.Link as={NavLink} to='/login'>
                Login
              </Nav.Link>
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
