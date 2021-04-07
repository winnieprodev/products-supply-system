import { useAsync } from "hooks";
import { Async, Product, Supplier } from "models";

import { GetSupplierDetailsQuery, useGetSupplierDetailsQuery } from "../gen";
import { mapProduct } from "./common";
import { mapSupplier } from "./common/supplierMappers";

export interface SupplierProductsResponse {
  supplier?: Supplier;
  products: Product[];
}

const mapper = (rawData: GetSupplierDetailsQuery): SupplierProductsResponse => {
  const supplier =
    (rawData.suppliers_by_pk && mapSupplier(rawData.suppliers_by_pk)) ||
    undefined;

  const products: Product[] =
    rawData.outlet_product_suppliers?.map(({ product }) =>
      mapProduct(product),
    ) || [];

  return { supplier, products };
};

export const useGetSupplierDetails = (
  outletId: string,
  supplierId: string,
): Async<SupplierProductsResponse> => {
  const { loading, error, data } = useGetSupplierDetailsQuery({
    variables: {
      outletId: parseInt(outletId, 10),
      supplierId: parseInt(supplierId, 10),
    },
  });

  return useAsync({ isLoading: loading, error, data, mapper });
};
