import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "components";
import React from "react";
import { Empty } from "utils/types";

import { LoaderScreen } from "../LoaderScreen";
import { Login } from "./components";

const Auth: React.FC<React.PropsWithChildren<Empty>> = ({ children }) => {
  const {
    isLoading,
    isAuthenticated,
    error,
    loginWithRedirect,
    logout,
  } = useAuth0();

  if (isLoading) {
    return (
      <LoaderScreen>
        <p>Loading...</p>
        <Button onClick={() => logout({ returnTo: window.location.origin })}>
          Cancel
        </Button>
      </LoaderScreen>
    );
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return <Login onClick={loginWithRedirect} />;
};

export default Auth;
