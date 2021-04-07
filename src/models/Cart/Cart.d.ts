import { QuantityType } from "models/Product";

export type Cart = ProductCartInfo[];

export interface CartQuantity {
  type: QuantityType;
  amount: number;
}
export interface ProductCartInfo {
  productId: string;
  quantities: CartQuantity[];
}
