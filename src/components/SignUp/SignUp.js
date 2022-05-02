import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Login/Login.css";
import auth from "../../firebase.init";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from "../Loading/Loading";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";

const SignUp = () => {
  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, loading] = useSignInWithGoogle(auth);
  const navigate = useNavigate();

    const handleSignUp = (e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        if(password=== confirmPassword){
          createUserWithEmailAndPassword(email,password);
          toast("Account Create Successfully");
          navigate('/login');
        }else{
          toast('Password Not Matched')
        }
    }

    const handleGoogleSign = () =>{
      if (loading) {
        return <Loading></Loading>
      }
      signInWithGoogle();
    }
  return (
    <div>
      <div className="login-form container mb-5">
        <form onSubmit={handleSignUp} className="m-auto bg-white shadow-lg rounded-3 mt-4">
          <h3 className="text-center p-3 text-danger">Sign Up</h3>

          <div className="form-group m-4">
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter email"
              required
            />
          </div>

          <div className="form-group m-4">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter password"
              required
            />
          </div>

          <div className="form-group m-4">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              className="form-control"
              placeholder="Confirm Password"
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

            <p className="me-4 m-0">
              <small>
                Have an Account?{" "}
                <Link to="/login">
                  <strong>Log In</strong>
                </Link>
              </small>
            </p>
          </div>

        </form>
          <div className=" mb-4 bg-secondary text-center rounded-3 text-white">
            <p className="pt-3">Or Sign In With:</p>
            <button onClick={handleGoogleSign} className="mb-4 me-3">Google</button>
            <button className="mb-4">Google</button>
          </div>
      </div>
    </div>
  );
};

export default SignUp;
