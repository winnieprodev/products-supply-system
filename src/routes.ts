import { createRoute } from "utils";

const HOME = createRoute("/");
export interface SearchParams {
  value?: string;
}
const SEARCH = createRoute<SearchParams>("/search/:value?");

export interface NewOrderParams {
  outletId: string;
}
const NEW_ORDER = createRoute<NewOrderParams>("/browse/:outletId/");

export type SupplierType = "local" | "warehouse";
export interface SuppliersListParams {
  outletId: string;
  supplierType: SupplierType;
}
const SUPPLIERS_LIST = createRoute<SuppliersListParams>(
  "/browse/:outletId/:supplierType",
);

export interface SupplierDetailsParams {
  supplierId: string;
  supplierType: SupplierType;
  outletId: string;
  productId?: string;
}
const SUPPLIER_DETAILS = createRoute<SupplierDetailsParams>(
  "/browse/:outletId/:supplierType/:supplierId/:productId?",
);
export interface CheckoutParams {
  supplierId: string;
  supplierType: SupplierType;
  outletId: string;
  cartId: string;
}

const CHECKOUT = createRoute<CheckoutParams>(
  "/checkout/:outletId/:supplierType/:supplierId/:cartId/",
);

const OUTLET_LIST = createRoute("/browse/");

const MY_ORDERS = createRoute("/myorders");

const ROUTES = {
  HOME,
  CHECKOUT,
  SEARCH,
  OUTLET_LIST,
  SUPPLIER_DETAILS,
  SUPPLIERS_LIST,
  NEW_ORDER,
  MY_ORDERS,
};

export default ROUTES;
