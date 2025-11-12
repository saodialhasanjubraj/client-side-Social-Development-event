import React, { useState } from "react";
import { AuthContext } from "./AuthContext";

import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase.config";

const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);

  // Sign up with Email
  const handleEmailSingUp = (email, passowrd) => {
    return createUserWithEmailAndPassword(auth, email, passowrd)
      .then((result) => {
        const person = result.user;
        setUserInfo(person);
      })
      .catch((error) => console.log("Error from singUP user", error));
  };
  //* log in with Email
  const handleEmaillogin = (email, passowrd) => {
    return signInWithEmailAndPassword(auth, email, passowrd)
      .then((client) => setUserInfo(client))
      .catch((error) => {
        console.log("Error.code: ", error.code);
        console.log("Error.Message: ", error.message);
      });
  };
  //* google singIN-Out
  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider)
      .then((result) => setUserInfo(result))
      .catch((error) => console.log(error));
  };

  const handleSignOut = () => {
    return signOut(auth)
      .then((res) => setUserInfo(res))
      .catch((error) => console.log(error));
  };

  //* user loging remember
  onAuthStateChanged(auth, (user) => setUserInfo(user));

  const shareData = {
    userInfo,
    setUserInfo,
    handleEmaillogin,
    handleEmailSingUp,
    handleGoogleLogin,
    handleSignOut,
  };
  return <AuthContext value={shareData}>{children}</AuthContext>;
};

export default AuthProvider;
