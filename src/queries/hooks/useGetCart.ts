import { useAsync } from "hooks";
import { Async, ProductCartInfo } from "models";

import {
  GetCartContentSubscription,
  useGetCartContentSubscription,
} from "../gen";
import { mapCartQuantities } from "./common";

const mapper = (rawData: GetCartContentSubscription): ProductCartInfo[] =>
  rawData.orders_by_pk?.line_items.map(
    ({ product_id, loose_quantity, whole_quantity }) => ({
      productId: product_id.toString(),
      quantities: mapCartQuantities(whole_quantity, loose_quantity),
    }),
  ) || [];

export const useGetCart = (cartId: number): Async<ProductCartInfo[]> => {
  const { loading, error, data } = useGetCartContentSubscription({
    variables: { cartId },
  });

  return useAsync({ isLoading: loading, error, data, mapper });
};
