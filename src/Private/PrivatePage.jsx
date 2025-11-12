import React, { use } from "react";
import { AuthContext } from "../provider/AuthContext";
import { Navigate } from "react-router";

const PrivatePage = ({ children }) => {
  const { userInfo } = use(AuthContext);
  if (userInfo) {
    return children;
  }
  return <Navigate to="/register" />;
};

export default PrivatePage;
