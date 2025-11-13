import React, { use } from "react";
import { AuthContext } from "../provider/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivatePage = ({ children }) => {
  const location = useLocation()
  console.log(location)
  const { userInfo } = use(AuthContext);
  if (userInfo) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login" />;
};

export default PrivatePage;
