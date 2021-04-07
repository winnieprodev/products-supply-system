import { Async, Error } from "models";
import { useMemo } from "react";

interface OwnProps<T, TOrigin> {
  data: TOrigin | undefined;
  isLoading: boolean;
  error: Error | undefined;
  mapper: (data: TOrigin) => T | undefined;
}

export const useAsync = <T, TOrigin>({
  data,
  isLoading,
  error,
  mapper,
}: OwnProps<T, TOrigin>): Async<T> => {
  return useMemo(
    () => ({
      data: data && mapper(data),
      isLoading,
      error,
    }),
    [data, isLoading, error, mapper],
  );
};
