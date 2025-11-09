import React, { useState } from "react";
import { AuthContext } from "./AuthContext";

import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../firebase.config";

const AuthProvider = ({ children }) => {
  const handleEmailSingUp = (email, passowrd) => {
    return createUserWithEmailAndPassword(auth, email, passowrd);
  };

  const handleEmaillogin = (email, passowrd) => {
    return signInWithEmailAndPassword(auth, email, passowrd)
      .then((client) => setUser(client))
      .catch((error) => {
        console.log("Error.code: ", error.code);
        console.log("Error.Message: ", error.message);
      });
  };

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider)
      .then((result) => setUser(result))
      .catch((error) => console.log(error));
  };

  const [user, setUser] = useState(null);
  const shareData = { user, setUser, handleEmaillogin, handleEmailSingUp ,handleGoogleLogin};
  return <AuthContext value={shareData}>{children}</AuthContext>;
};

export default AuthProvider;
