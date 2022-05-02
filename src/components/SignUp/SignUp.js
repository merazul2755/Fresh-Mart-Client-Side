import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Login/Login.css";
import auth from "../../firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import Loading from "../Loading/Loading";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import Image from "../../image/google.png";

const SignUp = () => {
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [signInWithGoogle, loading, user1] = useSignInWithGoogle(auth);
  const [updateProfile] = useUpdateProfile(auth);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    toast("Account Create Successfully");
  };

  if (user || user1) {
    navigate("/blogs");
  }

  const handleGoogleSign = () => {
    if (loading) {
      return <Loading></Loading>;
    }
    signInWithGoogle();
  };
  return (
    <div>
      <div className="login-form container mb-5">
        <form
          onSubmit={handleSignUp}
          className="m-auto bg-white shadow-lg rounded-3 mt-4"
        >
          <h3 className="text-center p-3 text-danger">Sign Up</h3>

          <div className="form-group m-4">
            <label>Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter Name"
              required
            />
          </div>
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
        <div className=" mb-4 text-center bg-secondary rounded-3 text-white">
          <p className="pt-3">Or Sign In With:</p>
          <div className="text-center d-flex justify-content-center">
            <button
              onClick={handleGoogleSign}
              className="btn bg-light mb-4 text-center mt-3 d-flex align-items-center  rounded-3"
            >
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

export default SignUp;
