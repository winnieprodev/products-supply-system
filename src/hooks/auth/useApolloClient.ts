import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  split,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";
import { GRAPHQL_URI, GRAPHQL_URI_WS } from "constants/auth";
import { useMemo } from "react";

import { useAuthToken } from "./useAuthToken";

export const useApolloClient = () => {
  const token = useAuthToken();

  const client = useMemo(() => {
    if (token === undefined) {
      return undefined;
    }

    const httpLink = createHttpLink({
      uri: GRAPHQL_URI,
      credentials: "include",
    });

    const webSocketLink = new WebSocketLink({
      uri: GRAPHQL_URI_WS,
      options: {
        reconnect: true,
        connectionParams: {
          headers: {
            authorization: `Bearer ${token}`,
          },
        },
      },
    });

    const splitLink = split(
      ({ query }) => {
        const definition = getMainDefinition(query);
        return (
          definition.kind === "OperationDefinition" &&
          definition.operation === "subscription"
        );
      },
      webSocketLink,
      httpLink,
    );

    const authLink = setContext((_, { headers }) => {
      return {
        headers: {
          ...headers,
          authorization: `Bearer ${token}`,
        },
      };
    });

    return new ApolloClient({
      link: authLink.concat(splitLink),
      cache: new InMemoryCache(),
    });
  }, [token]);

  return client;
};
