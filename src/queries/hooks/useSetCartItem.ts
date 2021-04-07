import { useAsync } from "hooks";
import { ProductCartInfo } from "models";
import { useCallback } from "react";

import { SetCartItemMutation, useSetCartItemMutation } from "../gen";
import { mapReverseProductQuantities } from "./common";

const mapper = (rawData: SetCartItemMutation): number | undefined =>
  rawData?.set_quantity[0]?.id;

export const useSetCartItem = () => {
  const [
    setCartItemMutation,
    { data, loading, error },
  ] = useSetCartItemMutation();

  const setCartItem = useCallback(
    (cartId: number, cartInfo: ProductCartInfo) => {
      setCartItemMutation({
        variables: {
          orderId: cartId,
          productId: parseInt(cartInfo.productId, 10),
          ...mapReverseProductQuantities(cartInfo),
        },
      });
    },
    [],
  );

  const removeCartItem = useCallback((cartId: number, productId: string) => {
    setCartItemMutation({
      variables: {
        orderId: cartId,
        productId: parseInt(productId, 10),
        whole: 0,
        loose: 0,
      },
    });
  }, []);

  const responseId = useAsync({
    isLoading: loading,
    error,
    data: data || undefined,
    mapper,
  });

  return [setCartItem, removeCartItem, responseId] as const;
};
