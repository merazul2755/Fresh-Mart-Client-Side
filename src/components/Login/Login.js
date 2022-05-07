import React, { useState } from "react";
import Image from "../../image/google.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";
import Loading from "../Loading/Loading";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, loading1, user1] = useSignInWithGoogle(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(
    auth
  );

  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  
  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
    if (loading) {
      return <Loading></Loading>;
    }
    if (error) {
      toast(error.message);
    }
    
  };

  const handleGoogleSign = () => {
    if (loading1) {
      return <Loading></Loading>;
    }
    signInWithGoogle();
  };

  const navigate = useNavigate();
  if (user || user1) {
    navigate(from, {replace: true});
  }
  return (
    <div>
      <div className="login-form container mb-5">
        <form
          onSubmit={handleLogin}
          className="m-auto bg-white shadow-lg rounded-3 mt-4"
        >
          <h3 className="text-center p-3 text-danger">Log in</h3>

          <div className="form-group m-4">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group m-4">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-group m-4">
            <p className="btn text-danger" onClick={async () => {
          await sendPasswordResetEmail(email);
          alert('Sent email');
        }}>Forget Password?</p>
          </div>

          <div className="text-center d-lg-flex justify-content-between align-items-center">
            <button
              type="submit"
              className="btn btn-success ps-5 pe-5 me-4 mb-2 fw-bold ms-4 rounded-3 btn-md"
            >
              Sign in
            </button>

            <p className="me-4 mb-0">
              <small>
                Haven't an Account?{" "}
                <Link to="/signup">
                  <strong>Sign Up</strong>
                </Link>
              </small>{" "}
            </p>
          </div>
        </form>
        <div className=" mb-4 text-center bg-secondary rounded-3 text-white">
          <p className="pt-3">Or Sign In With:</p>
          <div className="text-center d-flex justify-content-center">
            <button onClick={handleGoogleSign} className="btn bg-light mb-4 text-center mt-3 d-flex align-items-center  rounded-3">
              <img
                width={30}
                className="rounded-circle me-2"
                src={Image}
                alt=""
              />
              <p className="mb-0">Sign In With Google</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
