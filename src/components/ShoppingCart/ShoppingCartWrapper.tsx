import { Async, Cart, ProductCartInfo } from "models";
import React, { useCallback, useState } from "react";
import { Empty } from "utils/types";
import { useSetCartItem } from "queries";

import { ShoppingCartContext } from "./utils";
import { useCartId } from "./hooks/useCartId";

export const ShoppingCartWrapper: React.FC<React.PropsWithChildren<Empty>> = ({
  children,
}) => {
  const [setCartItem, removeCartItem] = useSetCartItem();

  const cartId = useCartId();

  const [cart, setCart] = useState<Async<Cart> | undefined>();

  const setProduct = useCallback(
    (product: ProductCartInfo) => {
      cartId.data && setCartItem(cartId.data, product);
    },
    [cartId.data],
  );

  const removeProduct = useCallback(
    (productId: string) => {
      cartId.data && removeCartItem(cartId.data, productId);
    },
    [cartId.data],
  );
  return (
    <ShoppingCartContext.Provider
      value={{ cart, setCart, cartId, setProduct, removeProduct }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartWrapper;
