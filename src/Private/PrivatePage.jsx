import React, { use } from "react";
import { AuthContext } from "../provider/AuthContext";
import { Navigate } from "react-router";

const PrivatePage = ({ children }) => {
  const { user } = use(AuthContext);
  if (user) {
    return { children };
  } else <Navigate to="/register" />;
};

export default PrivatePage;
