import { useMemo } from "react";
import { matchPath, useLocation } from "react-router";
import { Route } from "utils";

export const useParamsOutsideSwitch = <T>({
  route,
}: Route<T>): T | undefined => {
  const location = useLocation();
  const result = useMemo(
    () =>
      matchPath<T>(location.pathname, {
        path: route,
      }),
    [location],
  );

  return result?.params;
};
