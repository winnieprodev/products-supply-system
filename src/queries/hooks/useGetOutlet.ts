import { useAsync } from "hooks";
import { Async, Outlet } from "models";

import { GetOutletQuery, useGetOutletQuery } from "../gen";
import { mapOutlets } from "./common";

const mapper = (rawData: GetOutletQuery): Outlet | undefined =>
  (rawData?.outlets_by_pk && mapOutlets(rawData.outlets_by_pk)) || undefined;

export const useGetOutlet = (id: string): Async<Outlet> => {
  const { loading, error, data } = useGetOutletQuery({
    variables: { outletId: parseInt(id, 10) },
  });

  return useAsync({ isLoading: loading, error, data, mapper });
};
