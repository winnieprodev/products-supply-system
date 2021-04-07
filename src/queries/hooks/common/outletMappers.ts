import { Outlet } from "models";
import * as Gen from "queries/gen";

export const mapOutlets = ({
  id,
  name,
  address,
  email,
  phone,
}: Pick<
  Gen.Outlets,
  "id" | "name" | "address" | "email" | "phone"
>): Outlet => ({
  id: id.toString(),
  fullname: name,
  address: address || "",
  email: email || "",
  phone: phone || "",
  code: "",
});
