import React from 'react'

const Footer = () => {
  return (
    <p className='footer'>
      Copyright © {new Date().getFullYear()} <strong>Dharmik Patel</strong>,{" "}
      <small>V2.O</small>
    </p>
  );
}

export default Footer