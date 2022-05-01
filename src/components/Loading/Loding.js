import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loding = () => {
    return (
        <div>
            <div
      style={{ height: "500px" }}
      className="w-100 d-flex justify-content-center align-items-center"
    >
      <Spinner animation="grow" variant="primary" />
    </div>
        </div>
    );
};

export default Loding;