import { Empty } from "./types";

export interface Route<T> {
  route: string;
  use: (params?: T) => string;
}

export const createRoute = <T = Empty>(route: string): Route<T> => ({
  route,
  use: (params?: T) => {
    let digestedRoute = route;
    if (params !== undefined) {
      digestedRoute = Object.entries(params).reduce((acc, [key, value]) => {
        return acc.replace(new RegExp(`:${key}\\??`), value);
      }, route);
    }
    return digestedRoute.replace(/:\w+\??/, "");
  },
});
