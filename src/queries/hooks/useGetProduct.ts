import { useAsync } from "hooks";
import { Async, Product } from "models";

import { GetProductQuery, useGetProductQuery } from "../gen";
import { mapProduct } from "./common";

const mapper = (rawData: GetProductQuery): Product | undefined =>
  rawData.products_by_pk ? mapProduct(rawData.products_by_pk) : undefined;

export const useGetProduct = (productId: string): Async<Product> => {
  const { loading, error, data } = useGetProductQuery({
    variables: {
      productId: parseInt(productId, 10),
    },
  });

  return useAsync({ isLoading: loading, error, data, mapper });
};
