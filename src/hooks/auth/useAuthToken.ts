import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import useAsyncEffect from "use-async-effect";

export const useAuthToken = () => {
  const { getAccessTokenSilently } = useAuth0();

  const [token, setToken] = useState<string>();

  useAsyncEffect(
    async (isMounted) => {
      const newToken = await getAccessTokenSilently();
      if (isMounted() === false) {
        return;
      }
      setToken(newToken);

      // That's a hack for making code-gen part slightly easier - please read readme file
      (window as any).getBearerToken = () => newToken;
    },
    [getAccessTokenSilently],
  );

  return token;
};
