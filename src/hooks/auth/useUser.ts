import { useAuth0 } from "@auth0/auth0-react";
import { User } from "models";

export const useUser = () => {
  const { user } = useAuth0();

  if (user === undefined) {
    throw new Error("User shouldn't be undefined at this point");
  }

  return user as User;
};
