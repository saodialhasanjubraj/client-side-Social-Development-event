import React, { useState } from "react";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [num, setNum] = useState(0);
  const shareData = { num, setNum };
  return <AuthContext value={shareData}>{children}</AuthContext>;
};

export default AuthProvider;
