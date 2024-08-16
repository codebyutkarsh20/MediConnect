// src/routes/PrivateRoute.js
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/Auth";

const PrivateRoute = ({ element: Component, ...rest }) => {
  const { loggedIn } = useContext(AuthContext);

  return loggedIn ? <Component {...rest} /> : <Navigate to="/" />;
};

export default PrivateRoute;
  
