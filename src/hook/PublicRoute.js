import { Route, Navigate } from "react-router-dom";

const PublicRoute = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth) return <Navigate to='/dashboard'/>;
        if (!auth)
          return (
            <Navigate to='/login'/>
          );
      }}
    />
  );
};

export default PublicRoute;