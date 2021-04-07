import { Supplier } from "models";
import * as Gen from "queries/gen";
import { generateMono } from "utils";

type PickedSupplier = Pick<Gen.Suppliers, "id" | "name" | "email" | "phone">;

export const mapSupplier = ({
  id,
  name,
  email,
  phone,
}: PickedSupplier): Supplier => ({
  id: id.toString(),
  title: name,
  mono: generateMono(name),
  email: email || "",
  phone: phone || "",
  fax: "",
});
