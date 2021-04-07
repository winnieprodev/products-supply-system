import { QuantityType } from "./enums";

export interface ProductQuantity {
  type: QuantityType;
  name: string;
  description: string;
}
export interface Product {
  id: string;
  image?: string;
  quantities: ProductQuantity[];
  code?: string;
  title: string;
  delivery?: string;
}
