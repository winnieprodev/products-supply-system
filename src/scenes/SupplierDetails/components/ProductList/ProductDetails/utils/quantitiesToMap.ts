import { Map } from "immutable";
import { CartQuantity, QuantityType } from "models";

export const quantitiesToMap = (quantities: CartQuantity[]) => {
  return Map<QuantityType, number>(
    quantities.map(({ type, amount }) => [type, amount] as const) as Iterable<
      [QuantityType, number]
    >,
  );
};
