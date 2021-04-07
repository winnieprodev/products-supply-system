import { useAsync } from "hooks";
import { Async, Supplier } from "models";
import { SupplierType } from "routes";

import {
  GetSuppliersListQuery,
  Supplier_Types_Enum,
  useGetSuppliersListQuery,
} from "../gen";
import { mapSupplier } from "./common/supplierMappers";

const mapper = (rawData: GetSuppliersListQuery): Supplier[] =>
  rawData?.outlet_product_suppliers.map(({ supplier }) =>
    mapSupplier(supplier),
  );

export const useGetSuppliersList = (
  outletId: string,
  supplierType: SupplierType,
): Async<Supplier[]> => {
  const type =
    supplierType === "warehouse"
      ? Supplier_Types_Enum.Warehouse
      : Supplier_Types_Enum.Direct;

  const { loading, error, data } = useGetSuppliersListQuery({
    variables: {
      outletId: parseInt(outletId, 10),
      type,
    },
  });

  return useAsync({ isLoading: loading, error, data, mapper });
};
