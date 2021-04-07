import { Supplier } from "models/Supplier";

import { OrderState } from "./enums";

export interface Order {
  id: string;
  supplier: Supplier;
  createdDate: string;
  finishedDate?: string;
  itemCount: number;
  state: OrderState;
}
