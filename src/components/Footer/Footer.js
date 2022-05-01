import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className="w-100 h-25 bg-dark
         d-flex flex-column justify-content-end align-items-center mt-5 pt-3">
      <p className="text-white">
        <small className="fw-lighter text-white">
          Sowad &#169;{currentYear} All rights reserved.
        </small>
      </p>
    </div>
    );
};

export default Footer;