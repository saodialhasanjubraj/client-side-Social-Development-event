import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthContext";
import { FaGoogle } from "react-icons/fa";

const Register = () => {
  const { handleEmailSingUp, handleGoogleLogin } = use(AuthContext);
  const handleSignUpEmail = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    handleEmailSingUp(name, photoURL, email, password);
    console.log(name, photoURL, email, password);
  };
  return (
    <div className="w-full h-[60vh] flex items-center justify-center">
      <div>
        <form onSubmit={handleSignUpEmail}>
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input w-80"
              placeholder="Name"
            />
            <label className="label">Photo URL</label>
            <input
              name="photoURL"
              type="text"
              className="input w-80"
              placeholder="Photo URL"
            />
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input w-80"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input w-80"
              placeholder="Password"
            />
            <div>
              <p className="link link-hover">
                Have an account? <Link to="/login">Sign in</Link>
              </p>
            </div>
            <button className="btn btn-neutral mt-4">Sing up</button>
          </fieldset>
        </form>
        <div>
          <button onClick={handleGoogleLogin} className="btn">
            <FaGoogle />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
