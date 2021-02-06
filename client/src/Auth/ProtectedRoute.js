import React from "react";
import { Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";

//Makes users sign into Auth0 before procceeding 
const ProtectedRoute = ({ component, ...args }) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => <h3 className='text-center mt-5'>Loading Auth0...</h3>,
    })}
    {...args}
  />
);

export default ProtectedRoute;