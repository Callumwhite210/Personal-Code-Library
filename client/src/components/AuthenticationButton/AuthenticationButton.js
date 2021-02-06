import React from "react";

import LoginButton from "../LoginButton/LoginButton";
import LogOutButton from "../LogOut/LogOutButton";

import { useAuth0 } from "@auth0/auth0-react";

//Changes between log in and log out button depending on users authentication
const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <LogOutButton /> : <LoginButton />;
};

export default AuthenticationButton;