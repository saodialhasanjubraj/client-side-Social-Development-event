import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Login = () => {
  const handleForm = (e) => {
    e.preventDefault();
    console.log(e);
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
  };
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="w-full flex items-center justify-center h-[60vh]">
      <div>
        <form onSubmit={handleForm}>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            
            <input
              name="email"
              type="email"
              className="input w-80"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <div className="flex items-center">
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="show-passowrd w-full absolute z-10 flex ml-70"
              >
                {showPassword ? (
                  <FaRegEye fontSize={20} />
                ) : (
                  <FaRegEyeSlash fontSize="20" />
                )}
              </div>
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                className="input w-80 z-0"
                placeholder="Password"
              />
            </div>
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
