import { Dropdown } from "components";
import React, { useContext, useEffect } from "react";
import { Empty } from "utils/types";

import { ShoppingCartContext } from "./utils";
import { CartAnchor, CartDropdown } from "./components";
import { useGetCart } from "queries";
import { AsyncWrapper } from "components/AsyncWrapper";
import { WrapperMode } from "models";

interface ShoppingCartContent {
  cartId: number;
}

const ShoppingCartContent: React.FC<ShoppingCartContent> = ({ cartId }) => {
  const cart = useGetCart(cartId);

  const { setCart } = useContext(ShoppingCartContext);

  useEffect(() => {
    setCart(cart);
    return () => setCart(undefined);
  }, [cart]);

  return (
    <AsyncWrapper item={cart} mode={WrapperMode.tiny}>
      {cart.data && (
        <Dropdown
          closeOnRouteSwitch
          anchor={<CartAnchor amount={cart.data.length} />}
        >
          <CartDropdown cart={cart.data} />
        </Dropdown>
      )}
    </AsyncWrapper>
  );
};

const ShoppingCart: React.FC<Empty> = () => {
  const { cartId } = useContext(ShoppingCartContext);
  if (cartId.data === undefined) {
    return null;
  }
  return <ShoppingCartContent cartId={cartId.data} />;
};

export default ShoppingCart;
