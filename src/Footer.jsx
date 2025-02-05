import React from 'react';

const Footer = () => {
  const footerStyles = {
    marginTop: '20px',
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#b76e79', 
    color: '#fff', 
    position: 'relative',
  };

  return (
    <footer style={footerStyles}>
      <p style={{ margin: '10px 0', fontSize: '1rem' }}>© 2024 Your Brand. All Rights Reserved.</p>
      <a href="#contact" style={{ color: '#ffcc80', textDecoration: 'none', fontWeight: 'bold' }}>
        Contact Us
      </a>
    </footer>
  );
};

export default Footer;
