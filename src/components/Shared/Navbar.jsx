import React, { use, useState } from "react";
import { Link, NavLink } from "react-router";
import { BrandLogo } from "../../../public/brandLogo";
import { AuthContext } from "../../provider/AuthContext";

const Navbar = () => {
  const { userInfo, handleSignOut } = use(AuthContext);
  const links = (
    <div className="flex lg:flex-row flex-col lg:gap-x-5 gap-x-0 gap-y-2 lg:gap-y-0 text-[18px]">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/event">Create Event</NavLink>
      </li>
      <li>
        <NavLink to="/upcommingEvent">UpComming Event</NavLink>
      </li>
    </div>
  );
  const [dark, setDark] = useState(false);

  console.log(userInfo);
  return (
    <div className="navbar bg-base-100 border-b-2 mb-2.5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <img src={BrandLogo} alt="" srcset="" className="h-10 w-10" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <div onClick={() => setDark(!dark)} className="theme-switcher">
          {dark}
        </div>
        {userInfo?.email && (
          <div className="dropdown dropdown-bottom z-10">
            <div tabIndex={0} role="button" className="btn m-1">
            <img src={userInfo.photoURL} alt="" className="h-8 w-8 rounded-full" />
              {userInfo?.displayName}
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-70 p-2 shadow-sm"
            >
              <div className="flex gap-x-4 w-full ">
                               <div>
                  <li>User name: {userInfo.displayName}</li>
                  <li>User email: {userInfo.email}</li>
                </div>
              </div>
            </ul>
          </div>
        )}
        <button className="btn bg-success">
          {userInfo ? (
            <button
              onClick={handleSignOut}
              className="btn bg-transparent border-none"
            >
              Log Out
            </button>
          ) : (
            <button className="btn bg-transparent border-none">
              <Link to="/register"> Sign In</Link>
            </button>
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
