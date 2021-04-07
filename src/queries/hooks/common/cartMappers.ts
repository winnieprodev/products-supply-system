import { CartQuantity, ProductCartInfo, QuantityType } from "models";

export const mapCartQuantities = (
  whole: number | undefined,
  loose: number | undefined,
): CartQuantity[] => {
  const quantities: CartQuantity[] = [];

  if (whole) {
    quantities.push({
      type: QuantityType.WHOLE,
      amount: whole,
    });
  }
  if (loose) {
    quantities.push({
      type: QuantityType.LOOSE,
      amount: loose,
    });
  }

  return quantities;
};

export const mapReverseProductQuantities = (cartInfo: ProductCartInfo) => {
  const whole =
    cartInfo.quantities.find(({ type }) => type === QuantityType.WHOLE)
      ?.amount || 0;
  const loose =
    cartInfo.quantities.find(({ type }) => type === QuantityType.LOOSE)
      ?.amount || 0;

  return { whole, loose };
};
