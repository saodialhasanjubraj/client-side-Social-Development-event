import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthContext";
import { FaGoogle } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";

const Register = () => {
  const { handleEmailSingUp, handleGoogleLogin } = use(AuthContext);

  const handleSignUpEmail = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    handleEmailSingUp(email, password);
    console.log(name, photoURL, email, password);
  };
  return (
    <div className="w-full h-full flex items-center justify-center pt-30 flex-col">
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
                Have an account?
                <Link className="text-blue-500 underline" to="/login">
                  Sign in
                </Link>
              </p>
            </div>
            <button className="btn btn-neutral mt-4">Sing up</button>
          </fieldset>
        </form>
        <div>
          <h1 className="text-xl my-3">Continue With, </h1>
          <button
            onClick={handleGoogleLogin}
            className="btn border-2 bg-transparent shadow-none w-full rounded-xl"
          >
            <FaGoogle className="text-sky-500 text-2xl" />
          </button>
        </div>
      </div>
      <button className="btn btn-success border-none shadow-none mt-5 w-80">
        <Link className="flex items-center gap-x-1 justify-center" to="/">
          <IoMdHome size={`24`} />
          <h1> Back to Home</h1>
        </Link>
      </button>
    </div>
  );
};

export default Register;
