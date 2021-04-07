import { Async, Cart, ProductCartInfo } from "models";
import React from "react";
import { mockAsync, mockCart } from "utils";

interface ShoppingCartContextProps {
  cartId: Async<number>;
  cart: Async<Cart> | undefined;
  setCart: (cart: Async<Cart> | undefined) => void;
  setProduct: (product: ProductCartInfo) => void;
  removeProduct: (productId: string) => void;
}

export const EMPTY_CART = { products: [] };
const mockFunction = () => {};

export const ShoppingCartContext = React.createContext<ShoppingCartContextProps>(
  {
    cartId: mockAsync(0),
    cart: mockAsync(mockCart(0)),
    setCart: mockFunction,
    setProduct: mockFunction,
    removeProduct: mockFunction,
  },
);
