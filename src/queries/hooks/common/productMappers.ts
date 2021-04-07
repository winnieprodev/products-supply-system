import { Product, ProductQuantity, QuantityType } from "models";
import * as Gen from "queries/gen";

type PickedUoms = Pick<Gen.Uoms, "name" | "unit">;

export const mapProductQuantities = (
  whole: PickedUoms | undefined,
  loose: PickedUoms | undefined,
): ProductQuantity[] => {
  const quantities: ProductQuantity[] = [];

  if (whole) {
    quantities.push({
      type: QuantityType.WHOLE,
      description: whole.name,
      name: whole.unit,
    });
  }
  if (loose) {
    quantities.push({
      type: QuantityType.LOOSE,
      description: loose.name,
      name: loose.unit,
    });
  }

  return quantities;
};

type PickedProduct = Pick<Gen.Products, "id" | "name" | "code"> & {
  whole_uom?: Gen.Maybe<PickedUoms>;
  loose_uom?: Gen.Maybe<PickedUoms>;
};

export const mapProduct = ({
  id,
  name,
  code,
  whole_uom,
  loose_uom,
}: PickedProduct): Product => ({
  id: id.toString(),
  title: name,
  code: code || undefined,
  quantities: mapProductQuantities(
    whole_uom || undefined,
    loose_uom || undefined,
  ),
});
