import { useAsync } from "hooks";
import { Async, Supplier } from "models";

import { GetSupplierQuery, useGetSupplierQuery } from "../gen";
import { mapSupplier } from "./common/supplierMappers";

const mapper = (rawData: GetSupplierQuery): Supplier | undefined =>
  rawData.suppliers_by_pk ? mapSupplier(rawData.suppliers_by_pk) : undefined;

export const useGetSupplier = (supplierId: string): Async<Supplier> => {
  const { loading, error, data } = useGetSupplierQuery({
    variables: {
      supplierId: parseInt(supplierId, 10),
    },
  });

  return useAsync({ isLoading: loading, error, data, mapper });
};
