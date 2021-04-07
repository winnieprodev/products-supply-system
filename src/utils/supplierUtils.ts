import { SupplierType } from "routes";

export const generateMono = (title: string): string =>
  title
    .split(" ")
    .map((word) => word.toUpperCase())
    .filter((word) => word !== "PTE" && word !== "PTE.")
    .filter((word) => word !== "LTD")
    .map((word) => word.replace("(", "")[0])
    .join("")
    .substring(0, 3);

export const getSupplierTypeName = (type: SupplierType): string => {
  switch (type) {
    case "warehouse":
      return "Warehouse";
    case "local":
      return "Local Suppliers";
  }
};
