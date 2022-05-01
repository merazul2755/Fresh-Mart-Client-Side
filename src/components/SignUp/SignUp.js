import React from "react";
import { Link } from "react-router-dom";
import "../Login/Login.css";

const SignUp = () => {

    const handleForm = (e) =>{
        e.preventDefault();
    }
  return (
    <div>
      <div className="login-form container mb-5">
        <form onSubmit={handleForm} className="m-auto bg-white shadow-lg rounded-3 mt-4">
          <h3 className="text-center p-3 text-danger">Sign Up</h3>

          <div className="form-group m-4">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              required
            />
          </div>

          <div className="form-group m-4">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              required
            />
          </div>

          <div className="form-group m-4">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              required
            />
          </div>

          <div className="form-group m-4">
            <p>Forget Password</p>
          </div>

          <div className="text-center d-lg-flex justify-content-between align-items-center">
            <button
              type="submit"
              className="btn btn-success ps-5 pe-5 me-4 mb-2 fw-bold ms-4 rounded-3 btn-md"
            >
              Sign Up
            </button>

            <p className="me-4">
              <small>
                Have an Account?{" "}
                <Link to="/login">
                  <strong>Log In</strong>
                </Link>
              </small>{" "}
            </p>
          </div>

          <div className=" mt-2 mb-4 bg-secondary text-center rounded-3 text-white">
            <p className="pt-3">Or Sign In With:</p>
            <button className="mb-4 me-3">Google</button>
            <button className="mb-4">Google</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
