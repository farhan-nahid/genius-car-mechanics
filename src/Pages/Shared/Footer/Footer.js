import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <small>
        Copy Right &copy; {new Date().getFullYear()} All right reserved
      </small>
    </footer>
  );
};

export default Footer;
