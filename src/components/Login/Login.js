import React from "react";

import { Link } from "react-router-dom";
import './Login.css'

const Login = () => {
  return (
    <div>
      <div className="login-form container mb-5">
          <form className="m-auto bg-white shadow-lg rounded-3 mt-5">
            <h3 className="text-center p-3 text-danger">Log in</h3>

            <div className="form-group m-4">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>

            <div className="form-group m-4">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>

            <div className="form-group m-4">
              <p>Forget Password</p>
            </div>

            <div className="text-center d-lg-flex justify-content-center align-items-center">
            <button type="submit" className="btn btn-success ps-5 pe-5 me-4 mb-2 fw-bold ms-4 rounded-3 btn-md">
              Sign in
            </button>
            <p><small>Haven't an Account? <Link to='/signup'><strong>Sign Up</strong></Link></small> </p>
            </div>

            <div className=" mt-2 bg-secondary text-center rounded-3 text-white">
                <p className="pt-3">Or Sign In With:</p>
                <button className="mb-3">Google</button>
            </div>
            
          </form>
    
      </div>
    </div>
  );
};

export default Login;
