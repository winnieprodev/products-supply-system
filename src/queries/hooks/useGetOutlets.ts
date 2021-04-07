import { useAsync } from "hooks";
import { Async, Outlet } from "models";

import { GetMyOutletsQuery, useGetMyOutletsQuery } from "../gen";
import { mapOutlets } from "./common";

const mapper = (rawData: GetMyOutletsQuery): Outlet[] =>
  rawData?.outlets.map(mapOutlets);

export const useGetOutlets = (): Async<Outlet[]> => {
  const { loading, error, data } = useGetMyOutletsQuery();

  return useAsync({ isLoading: loading, error, data, mapper });
};
