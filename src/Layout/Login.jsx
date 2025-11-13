import React, { use, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { AuthContext } from "../provider/AuthContext";
import { Link, useLocation, useNavigate } from "react-router";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { handleEmaillogin } = use(AuthContext);
  const handleForm = (e) => {
    e.preventDefault();
    console.log(e);
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    handleEmaillogin(email, password).then(() => {
      navigate(location.state || "/");
    });
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
              <p>
                Dont have an account?{" "}
                <Link className="text-blue-600 underline" to="/register">
                  Sing up
                </Link>
              </p>
            </div>
            <button className="btn btn-neutral mt-4">Sign in</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
