import { useAuth0 } from "@auth0/auth0-react";
import { Button, Dropdown } from "components";
import { useUser } from "hooks";
import React from "react";
import { Empty } from "utils/types";

import * as Styled from "./LoginInfo.styled";

const LoginInfo: React.FC<Empty> = () => {
  const user = useUser();
  const { logout } = useAuth0();

  return (
    <Dropdown anchor={<Styled.Circle $img={user.picture} />}>
      <Styled.Dropdown>
        <Styled.User>
          <Styled.Image $img={user.picture} />
          <Styled.Details>
            <Styled.Title>
              {user.name} {user.sirname}
            </Styled.Title>
            {user.email}
          </Styled.Details>
        </Styled.User>
        <Button
          fullWidth
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          Logout
        </Button>
      </Styled.Dropdown>
    </Dropdown>
  );
};

export default LoginInfo;
