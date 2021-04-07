import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: any;
  timestamp: any;
  timestamptz: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars["Boolean"]>;
  _gt?: Maybe<Scalars["Boolean"]>;
  _gte?: Maybe<Scalars["Boolean"]>;
  _in?: Maybe<Array<Scalars["Boolean"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["Boolean"]>;
  _lte?: Maybe<Scalars["Boolean"]>;
  _neq?: Maybe<Scalars["Boolean"]>;
  _nin?: Maybe<Array<Scalars["Boolean"]>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars["Int"]>;
  _gt?: Maybe<Scalars["Int"]>;
  _gte?: Maybe<Scalars["Int"]>;
  _in?: Maybe<Array<Scalars["Int"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["Int"]>;
  _lte?: Maybe<Scalars["Int"]>;
  _neq?: Maybe<Scalars["Int"]>;
  _nin?: Maybe<Array<Scalars["Int"]>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars["String"]>;
  _gt?: Maybe<Scalars["String"]>;
  _gte?: Maybe<Scalars["String"]>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars["String"]>;
  _in?: Maybe<Array<Scalars["String"]>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars["String"]>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars["String"]>;
  _lt?: Maybe<Scalars["String"]>;
  _lte?: Maybe<Scalars["String"]>;
  _neq?: Maybe<Scalars["String"]>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars["String"]>;
  _nin?: Maybe<Array<Scalars["String"]>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars["String"]>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars["String"]>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars["String"]>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars["String"]>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars["String"]>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars["String"]>;
};

/** columns and relationships of "brands" */
export type Brands = {
  __typename?: "brands";
  id: Scalars["Int"];
  name: Scalars["String"];
};

/** Boolean expression to filter rows from the table "brands". All fields are combined with a logical 'AND'. */
export type Brands_Bool_Exp = {
  _and?: Maybe<Array<Brands_Bool_Exp>>;
  _not?: Maybe<Brands_Bool_Exp>;
  _or?: Maybe<Array<Brands_Bool_Exp>>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "brands". */
export type Brands_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** select columns of table "brands" */
export enum Brands_Select_Column {
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
}

export type Cancel_Order_Args = {
  order_id?: Maybe<Scalars["Int"]>;
};

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: Maybe<Scalars["date"]>;
  _gt?: Maybe<Scalars["date"]>;
  _gte?: Maybe<Scalars["date"]>;
  _in?: Maybe<Array<Scalars["date"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["date"]>;
  _lte?: Maybe<Scalars["date"]>;
  _neq?: Maybe<Scalars["date"]>;
  _nin?: Maybe<Array<Scalars["date"]>>;
};

/** columns and relationships of "dates" */
export type Dates = {
  __typename?: "dates";
  value: Scalars["date"];
};

/** Boolean expression to filter rows from the table "dates". All fields are combined with a logical 'AND'. */
export type Dates_Bool_Exp = {
  _and?: Maybe<Array<Dates_Bool_Exp>>;
  _not?: Maybe<Dates_Bool_Exp>;
  _or?: Maybe<Array<Dates_Bool_Exp>>;
  value?: Maybe<Date_Comparison_Exp>;
};

/** Ordering options when selecting data from "dates". */
export type Dates_Order_By = {
  value?: Maybe<Order_By>;
};

/** select columns of table "dates" */
export enum Dates_Select_Column {
  /** column name */
  Value = "value",
}

export type Delivery_Dates_Args = {
  order_id?: Maybe<Scalars["Int"]>;
  reference_timestamp?: Maybe<Scalars["timestamp"]>;
};

export type Empty_Cart_Args = {
  order_id?: Maybe<Scalars["Int"]>;
};

export type Find_Or_Create_Cart_Args = {
  outlet_id?: Maybe<Scalars["Int"]>;
  supplier_id?: Maybe<Scalars["Int"]>;
};

/** columns and relationships of "line_items" */
export type Line_Items = {
  __typename?: "line_items";
  created_at: Scalars["timestamptz"];
  id: Scalars["Int"];
  loose_quantity: Scalars["Int"];
  /** An object relationship */
  loose_uom?: Maybe<Uoms>;
  loose_uom_id?: Maybe<Scalars["Int"]>;
  /** An object relationship */
  order: Orders;
  order_id: Scalars["Int"];
  /** An object relationship */
  product: Products;
  product_id: Scalars["Int"];
  updated_at: Scalars["timestamptz"];
  whole_quantity: Scalars["Int"];
  /** An object relationship */
  whole_uom?: Maybe<Uoms>;
  whole_uom_id?: Maybe<Scalars["Int"]>;
};

/** order by aggregate values of table "line_items" */
export type Line_Items_Aggregate_Order_By = {
  avg?: Maybe<Line_Items_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Line_Items_Max_Order_By>;
  min?: Maybe<Line_Items_Min_Order_By>;
  stddev?: Maybe<Line_Items_Stddev_Order_By>;
  stddev_pop?: Maybe<Line_Items_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Line_Items_Stddev_Samp_Order_By>;
  sum?: Maybe<Line_Items_Sum_Order_By>;
  var_pop?: Maybe<Line_Items_Var_Pop_Order_By>;
  var_samp?: Maybe<Line_Items_Var_Samp_Order_By>;
  variance?: Maybe<Line_Items_Variance_Order_By>;
};

/** order by avg() on columns of table "line_items" */
export type Line_Items_Avg_Order_By = {
  id?: Maybe<Order_By>;
  loose_quantity?: Maybe<Order_By>;
  loose_uom_id?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  whole_quantity?: Maybe<Order_By>;
  whole_uom_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "line_items". All fields are combined with a logical 'AND'. */
export type Line_Items_Bool_Exp = {
  _and?: Maybe<Array<Line_Items_Bool_Exp>>;
  _not?: Maybe<Line_Items_Bool_Exp>;
  _or?: Maybe<Array<Line_Items_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  loose_quantity?: Maybe<Int_Comparison_Exp>;
  loose_uom?: Maybe<Uoms_Bool_Exp>;
  loose_uom_id?: Maybe<Int_Comparison_Exp>;
  order?: Maybe<Orders_Bool_Exp>;
  order_id?: Maybe<Int_Comparison_Exp>;
  product?: Maybe<Products_Bool_Exp>;
  product_id?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  whole_quantity?: Maybe<Int_Comparison_Exp>;
  whole_uom?: Maybe<Uoms_Bool_Exp>;
  whole_uom_id?: Maybe<Int_Comparison_Exp>;
};

/** order by max() on columns of table "line_items" */
export type Line_Items_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  loose_quantity?: Maybe<Order_By>;
  loose_uom_id?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  whole_quantity?: Maybe<Order_By>;
  whole_uom_id?: Maybe<Order_By>;
};

/** order by min() on columns of table "line_items" */
export type Line_Items_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  loose_quantity?: Maybe<Order_By>;
  loose_uom_id?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  whole_quantity?: Maybe<Order_By>;
  whole_uom_id?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "line_items". */
export type Line_Items_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  loose_quantity?: Maybe<Order_By>;
  loose_uom?: Maybe<Uoms_Order_By>;
  loose_uom_id?: Maybe<Order_By>;
  order?: Maybe<Orders_Order_By>;
  order_id?: Maybe<Order_By>;
  product?: Maybe<Products_Order_By>;
  product_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  whole_quantity?: Maybe<Order_By>;
  whole_uom?: Maybe<Uoms_Order_By>;
  whole_uom_id?: Maybe<Order_By>;
};

/** select columns of table "line_items" */
export enum Line_Items_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  LooseQuantity = "loose_quantity",
  /** column name */
  LooseUomId = "loose_uom_id",
  /** column name */
  OrderId = "order_id",
  /** column name */
  ProductId = "product_id",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  WholeQuantity = "whole_quantity",
  /** column name */
  WholeUomId = "whole_uom_id",
}

/** order by stddev() on columns of table "line_items" */
export type Line_Items_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  loose_quantity?: Maybe<Order_By>;
  loose_uom_id?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  whole_quantity?: Maybe<Order_By>;
  whole_uom_id?: Maybe<Order_By>;
};

/** order by stddev_pop() on columns of table "line_items" */
export type Line_Items_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  loose_quantity?: Maybe<Order_By>;
  loose_uom_id?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  whole_quantity?: Maybe<Order_By>;
  whole_uom_id?: Maybe<Order_By>;
};

/** order by stddev_samp() on columns of table "line_items" */
export type Line_Items_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  loose_quantity?: Maybe<Order_By>;
  loose_uom_id?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  whole_quantity?: Maybe<Order_By>;
  whole_uom_id?: Maybe<Order_By>;
};

/** order by sum() on columns of table "line_items" */
export type Line_Items_Sum_Order_By = {
  id?: Maybe<Order_By>;
  loose_quantity?: Maybe<Order_By>;
  loose_uom_id?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  whole_quantity?: Maybe<Order_By>;
  whole_uom_id?: Maybe<Order_By>;
};

/** order by var_pop() on columns of table "line_items" */
export type Line_Items_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  loose_quantity?: Maybe<Order_By>;
  loose_uom_id?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  whole_quantity?: Maybe<Order_By>;
  whole_uom_id?: Maybe<Order_By>;
};

/** order by var_samp() on columns of table "line_items" */
export type Line_Items_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  loose_quantity?: Maybe<Order_By>;
  loose_uom_id?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  whole_quantity?: Maybe<Order_By>;
  whole_uom_id?: Maybe<Order_By>;
};

/** order by variance() on columns of table "line_items" */
export type Line_Items_Variance_Order_By = {
  id?: Maybe<Order_By>;
  loose_quantity?: Maybe<Order_By>;
  loose_uom_id?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  whole_quantity?: Maybe<Order_By>;
  whole_uom_id?: Maybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: "mutation_root";
  /** execute VOLATILE function "cancel_order" which returns "orders" */
  cancel_order: Array<Orders>;
  /** execute VOLATILE function "empty_cart" which returns "line_items" */
  empty_cart: Array<Line_Items>;
  /** execute VOLATILE function "find_or_create_cart" which returns "orders" */
  find_or_create_cart: Array<Orders>;
  /** execute VOLATILE function "set_quantity" which returns "line_items" */
  set_quantity: Array<Line_Items>;
  /** execute VOLATILE function "submit_order" which returns "orders" */
  submit_order: Array<Orders>;
};

/** mutation root */
export type Mutation_RootCancel_OrderArgs = {
  args: Cancel_Order_Args;
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};

/** mutation root */
export type Mutation_RootEmpty_CartArgs = {
  args: Empty_Cart_Args;
  distinct_on?: Maybe<Array<Line_Items_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Line_Items_Order_By>>;
  where?: Maybe<Line_Items_Bool_Exp>;
};

/** mutation root */
export type Mutation_RootFind_Or_Create_CartArgs = {
  args: Find_Or_Create_Cart_Args;
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};

/** mutation root */
export type Mutation_RootSet_QuantityArgs = {
  args: Set_Quantity_Args;
  distinct_on?: Maybe<Array<Line_Items_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Line_Items_Order_By>>;
  where?: Maybe<Line_Items_Bool_Exp>;
};

/** mutation root */
export type Mutation_RootSubmit_OrderArgs = {
  args: Submit_Order_Args;
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = "asc",
  /** in ascending order, nulls first */
  AscNullsFirst = "asc_nulls_first",
  /** in ascending order, nulls last */
  AscNullsLast = "asc_nulls_last",
  /** in descending order, nulls first */
  Desc = "desc",
  /** in descending order, nulls first */
  DescNullsFirst = "desc_nulls_first",
  /** in descending order, nulls last */
  DescNullsLast = "desc_nulls_last",
}

export enum Order_Statuses_Enum {
  Canceled = "CANCELED",
  Delivered = "DELIVERED",
  Draft = "DRAFT",
  PendingForSubmission = "PENDING_FOR_SUBMISSION",
  Submitted = "SUBMITTED",
}

/** Boolean expression to compare columns of type "order_statuses_enum". All fields are combined with logical 'AND'. */
export type Order_Statuses_Enum_Comparison_Exp = {
  _eq?: Maybe<Order_Statuses_Enum>;
  _in?: Maybe<Array<Order_Statuses_Enum>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _neq?: Maybe<Order_Statuses_Enum>;
  _nin?: Maybe<Array<Order_Statuses_Enum>>;
};

/** columns and relationships of "orders" */
export type Orders = {
  __typename?: "orders";
  created_at: Scalars["timestamptz"];
  delivery_on?: Maybe<Scalars["date"]>;
  id: Scalars["Int"];
  /** An array relationship */
  line_items: Array<Line_Items>;
  note?: Maybe<Scalars["String"]>;
  number?: Maybe<Scalars["String"]>;
  /** An object relationship */
  outlet: Outlets;
  outlet_id: Scalars["Int"];
  status: Order_Statuses_Enum;
  /** An object relationship */
  supplier: Suppliers;
  supplier_id: Scalars["Int"];
  updated_at: Scalars["timestamptz"];
  user_id: Scalars["Int"];
};

/** columns and relationships of "orders" */
export type OrdersLine_ItemsArgs = {
  distinct_on?: Maybe<Array<Line_Items_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Line_Items_Order_By>>;
  where?: Maybe<Line_Items_Bool_Exp>;
};

/** aggregated selection of "orders" */
export type Orders_Aggregate = {
  __typename?: "orders_aggregate";
  aggregate?: Maybe<Orders_Aggregate_Fields>;
  nodes: Array<Orders>;
};

/** aggregate fields of "orders" */
export type Orders_Aggregate_Fields = {
  __typename?: "orders_aggregate_fields";
  avg?: Maybe<Orders_Avg_Fields>;
  count: Scalars["Int"];
  max?: Maybe<Orders_Max_Fields>;
  min?: Maybe<Orders_Min_Fields>;
  stddev?: Maybe<Orders_Stddev_Fields>;
  stddev_pop?: Maybe<Orders_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Orders_Stddev_Samp_Fields>;
  sum?: Maybe<Orders_Sum_Fields>;
  var_pop?: Maybe<Orders_Var_Pop_Fields>;
  var_samp?: Maybe<Orders_Var_Samp_Fields>;
  variance?: Maybe<Orders_Variance_Fields>;
};

/** aggregate fields of "orders" */
export type Orders_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Orders_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type Orders_Avg_Fields = {
  __typename?: "orders_avg_fields";
  id?: Maybe<Scalars["Float"]>;
  outlet_id?: Maybe<Scalars["Float"]>;
  supplier_id?: Maybe<Scalars["Float"]>;
  user_id?: Maybe<Scalars["Float"]>;
};

/** Boolean expression to filter rows from the table "orders". All fields are combined with a logical 'AND'. */
export type Orders_Bool_Exp = {
  _and?: Maybe<Array<Orders_Bool_Exp>>;
  _not?: Maybe<Orders_Bool_Exp>;
  _or?: Maybe<Array<Orders_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  delivery_on?: Maybe<Date_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  line_items?: Maybe<Line_Items_Bool_Exp>;
  note?: Maybe<String_Comparison_Exp>;
  number?: Maybe<String_Comparison_Exp>;
  outlet?: Maybe<Outlets_Bool_Exp>;
  outlet_id?: Maybe<Int_Comparison_Exp>;
  status?: Maybe<Order_Statuses_Enum_Comparison_Exp>;
  supplier?: Maybe<Suppliers_Bool_Exp>;
  supplier_id?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Orders_Max_Fields = {
  __typename?: "orders_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  delivery_on?: Maybe<Scalars["date"]>;
  id?: Maybe<Scalars["Int"]>;
  note?: Maybe<Scalars["String"]>;
  number?: Maybe<Scalars["String"]>;
  outlet_id?: Maybe<Scalars["Int"]>;
  supplier_id?: Maybe<Scalars["Int"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user_id?: Maybe<Scalars["Int"]>;
};

/** aggregate min on columns */
export type Orders_Min_Fields = {
  __typename?: "orders_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  delivery_on?: Maybe<Scalars["date"]>;
  id?: Maybe<Scalars["Int"]>;
  note?: Maybe<Scalars["String"]>;
  number?: Maybe<Scalars["String"]>;
  outlet_id?: Maybe<Scalars["Int"]>;
  supplier_id?: Maybe<Scalars["Int"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user_id?: Maybe<Scalars["Int"]>;
};

/** Ordering options when selecting data from "orders". */
export type Orders_Order_By = {
  created_at?: Maybe<Order_By>;
  delivery_on?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  line_items_aggregate?: Maybe<Line_Items_Aggregate_Order_By>;
  note?: Maybe<Order_By>;
  number?: Maybe<Order_By>;
  outlet?: Maybe<Outlets_Order_By>;
  outlet_id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  supplier?: Maybe<Suppliers_Order_By>;
  supplier_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** select columns of table "orders" */
export enum Orders_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeliveryOn = "delivery_on",
  /** column name */
  Id = "id",
  /** column name */
  Note = "note",
  /** column name */
  Number = "number",
  /** column name */
  OutletId = "outlet_id",
  /** column name */
  Status = "status",
  /** column name */
  SupplierId = "supplier_id",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id",
}

/** aggregate stddev on columns */
export type Orders_Stddev_Fields = {
  __typename?: "orders_stddev_fields";
  id?: Maybe<Scalars["Float"]>;
  outlet_id?: Maybe<Scalars["Float"]>;
  supplier_id?: Maybe<Scalars["Float"]>;
  user_id?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_pop on columns */
export type Orders_Stddev_Pop_Fields = {
  __typename?: "orders_stddev_pop_fields";
  id?: Maybe<Scalars["Float"]>;
  outlet_id?: Maybe<Scalars["Float"]>;
  supplier_id?: Maybe<Scalars["Float"]>;
  user_id?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_samp on columns */
export type Orders_Stddev_Samp_Fields = {
  __typename?: "orders_stddev_samp_fields";
  id?: Maybe<Scalars["Float"]>;
  outlet_id?: Maybe<Scalars["Float"]>;
  supplier_id?: Maybe<Scalars["Float"]>;
  user_id?: Maybe<Scalars["Float"]>;
};

/** aggregate sum on columns */
export type Orders_Sum_Fields = {
  __typename?: "orders_sum_fields";
  id?: Maybe<Scalars["Int"]>;
  outlet_id?: Maybe<Scalars["Int"]>;
  supplier_id?: Maybe<Scalars["Int"]>;
  user_id?: Maybe<Scalars["Int"]>;
};

/** aggregate var_pop on columns */
export type Orders_Var_Pop_Fields = {
  __typename?: "orders_var_pop_fields";
  id?: Maybe<Scalars["Float"]>;
  outlet_id?: Maybe<Scalars["Float"]>;
  supplier_id?: Maybe<Scalars["Float"]>;
  user_id?: Maybe<Scalars["Float"]>;
};

/** aggregate var_samp on columns */
export type Orders_Var_Samp_Fields = {
  __typename?: "orders_var_samp_fields";
  id?: Maybe<Scalars["Float"]>;
  outlet_id?: Maybe<Scalars["Float"]>;
  supplier_id?: Maybe<Scalars["Float"]>;
  user_id?: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type Orders_Variance_Fields = {
  __typename?: "orders_variance_fields";
  id?: Maybe<Scalars["Float"]>;
  outlet_id?: Maybe<Scalars["Float"]>;
  supplier_id?: Maybe<Scalars["Float"]>;
  user_id?: Maybe<Scalars["Float"]>;
};

/** columns and relationships of "outlet_product_suppliers" */
export type Outlet_Product_Suppliers = {
  __typename?: "outlet_product_suppliers";
  /** An object relationship */
  outlet: Outlets;
  outlet_id: Scalars["Int"];
  /** An object relationship */
  product: Products;
  product_id: Scalars["Int"];
  /** An object relationship */
  supplier: Suppliers;
  supplier_id: Scalars["Int"];
};

/** order by aggregate values of table "outlet_product_suppliers" */
export type Outlet_Product_Suppliers_Aggregate_Order_By = {
  avg?: Maybe<Outlet_Product_Suppliers_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Outlet_Product_Suppliers_Max_Order_By>;
  min?: Maybe<Outlet_Product_Suppliers_Min_Order_By>;
  stddev?: Maybe<Outlet_Product_Suppliers_Stddev_Order_By>;
  stddev_pop?: Maybe<Outlet_Product_Suppliers_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Outlet_Product_Suppliers_Stddev_Samp_Order_By>;
  sum?: Maybe<Outlet_Product_Suppliers_Sum_Order_By>;
  var_pop?: Maybe<Outlet_Product_Suppliers_Var_Pop_Order_By>;
  var_samp?: Maybe<Outlet_Product_Suppliers_Var_Samp_Order_By>;
  variance?: Maybe<Outlet_Product_Suppliers_Variance_Order_By>;
};

/** order by avg() on columns of table "outlet_product_suppliers" */
export type Outlet_Product_Suppliers_Avg_Order_By = {
  outlet_id?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  supplier_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "outlet_product_suppliers". All fields are combined with a logical 'AND'. */
export type Outlet_Product_Suppliers_Bool_Exp = {
  _and?: Maybe<Array<Outlet_Product_Suppliers_Bool_Exp>>;
  _not?: Maybe<Outlet_Product_Suppliers_Bool_Exp>;
  _or?: Maybe<Array<Outlet_Product_Suppliers_Bool_Exp>>;
  outlet?: Maybe<Outlets_Bool_Exp>;
  outlet_id?: Maybe<Int_Comparison_Exp>;
  product?: Maybe<Products_Bool_Exp>;
  product_id?: Maybe<Int_Comparison_Exp>;
  supplier?: Maybe<Suppliers_Bool_Exp>;
  supplier_id?: Maybe<Int_Comparison_Exp>;
};

/** order by max() on columns of table "outlet_product_suppliers" */
export type Outlet_Product_Suppliers_Max_Order_By = {
  outlet_id?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  supplier_id?: Maybe<Order_By>;
};

/** order by min() on columns of table "outlet_product_suppliers" */
export type Outlet_Product_Suppliers_Min_Order_By = {
  outlet_id?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  supplier_id?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "outlet_product_suppliers". */
export type Outlet_Product_Suppliers_Order_By = {
  outlet?: Maybe<Outlets_Order_By>;
  outlet_id?: Maybe<Order_By>;
  product?: Maybe<Products_Order_By>;
  product_id?: Maybe<Order_By>;
  supplier?: Maybe<Suppliers_Order_By>;
  supplier_id?: Maybe<Order_By>;
};

/** select columns of table "outlet_product_suppliers" */
export enum Outlet_Product_Suppliers_Select_Column {
  /** column name */
  OutletId = "outlet_id",
  /** column name */
  ProductId = "product_id",
  /** column name */
  SupplierId = "supplier_id",
}

/** order by stddev() on columns of table "outlet_product_suppliers" */
export type Outlet_Product_Suppliers_Stddev_Order_By = {
  outlet_id?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  supplier_id?: Maybe<Order_By>;
};

/** order by stddev_pop() on columns of table "outlet_product_suppliers" */
export type Outlet_Product_Suppliers_Stddev_Pop_Order_By = {
  outlet_id?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  supplier_id?: Maybe<Order_By>;
};

/** order by stddev_samp() on columns of table "outlet_product_suppliers" */
export type Outlet_Product_Suppliers_Stddev_Samp_Order_By = {
  outlet_id?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  supplier_id?: Maybe<Order_By>;
};

/** order by sum() on columns of table "outlet_product_suppliers" */
export type Outlet_Product_Suppliers_Sum_Order_By = {
  outlet_id?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  supplier_id?: Maybe<Order_By>;
};

/** order by var_pop() on columns of table "outlet_product_suppliers" */
export type Outlet_Product_Suppliers_Var_Pop_Order_By = {
  outlet_id?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  supplier_id?: Maybe<Order_By>;
};

/** order by var_samp() on columns of table "outlet_product_suppliers" */
export type Outlet_Product_Suppliers_Var_Samp_Order_By = {
  outlet_id?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  supplier_id?: Maybe<Order_By>;
};

/** order by variance() on columns of table "outlet_product_suppliers" */
export type Outlet_Product_Suppliers_Variance_Order_By = {
  outlet_id?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  supplier_id?: Maybe<Order_By>;
};

/** columns and relationships of "outlets" */
export type Outlets = {
  __typename?: "outlets";
  abbr?: Maybe<Scalars["String"]>;
  acct?: Maybe<Scalars["String"]>;
  address?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  id: Scalars["Int"];
  name: Scalars["String"];
  note?: Maybe<Scalars["String"]>;
  operating_hours?: Maybe<Scalars["String"]>;
  /** An array relationship */
  outlet_products: Array<Outlet_Product_Suppliers>;
  phone?: Maybe<Scalars["String"]>;
  sic?: Maybe<Scalars["String"]>;
  sic_phone?: Maybe<Scalars["String"]>;
  sn?: Maybe<Scalars["String"]>;
};

/** columns and relationships of "outlets" */
export type OutletsOutlet_ProductsArgs = {
  distinct_on?: Maybe<Array<Outlet_Product_Suppliers_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Outlet_Product_Suppliers_Order_By>>;
  where?: Maybe<Outlet_Product_Suppliers_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "outlets". All fields are combined with a logical 'AND'. */
export type Outlets_Bool_Exp = {
  _and?: Maybe<Array<Outlets_Bool_Exp>>;
  _not?: Maybe<Outlets_Bool_Exp>;
  _or?: Maybe<Array<Outlets_Bool_Exp>>;
  abbr?: Maybe<String_Comparison_Exp>;
  acct?: Maybe<String_Comparison_Exp>;
  address?: Maybe<String_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  note?: Maybe<String_Comparison_Exp>;
  operating_hours?: Maybe<String_Comparison_Exp>;
  outlet_products?: Maybe<Outlet_Product_Suppliers_Bool_Exp>;
  phone?: Maybe<String_Comparison_Exp>;
  sic?: Maybe<String_Comparison_Exp>;
  sic_phone?: Maybe<String_Comparison_Exp>;
  sn?: Maybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "outlets". */
export type Outlets_Order_By = {
  abbr?: Maybe<Order_By>;
  acct?: Maybe<Order_By>;
  address?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  note?: Maybe<Order_By>;
  operating_hours?: Maybe<Order_By>;
  outlet_products_aggregate?: Maybe<Outlet_Product_Suppliers_Aggregate_Order_By>;
  phone?: Maybe<Order_By>;
  sic?: Maybe<Order_By>;
  sic_phone?: Maybe<Order_By>;
  sn?: Maybe<Order_By>;
};

/** select columns of table "outlets" */
export enum Outlets_Select_Column {
  /** column name */
  Abbr = "abbr",
  /** column name */
  Acct = "acct",
  /** column name */
  Address = "address",
  /** column name */
  Email = "email",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  Note = "note",
  /** column name */
  OperatingHours = "operating_hours",
  /** column name */
  Phone = "phone",
  /** column name */
  Sic = "sic",
  /** column name */
  SicPhone = "sic_phone",
  /** column name */
  Sn = "sn",
}

/** columns and relationships of "products" */
export type Products = {
  __typename?: "products";
  active: Scalars["Boolean"];
  /** An object relationship */
  brand?: Maybe<Brands>;
  brand_id?: Maybe<Scalars["Int"]>;
  code?: Maybe<Scalars["String"]>;
  id: Scalars["Int"];
  /** An object relationship */
  loose_uom?: Maybe<Uoms>;
  loose_uom_id?: Maybe<Scalars["Int"]>;
  name: Scalars["String"];
  /** An array relationship */
  outlet_product_suppliers: Array<Outlet_Product_Suppliers>;
  /** An object relationship */
  whole_uom?: Maybe<Uoms>;
  whole_uom_id?: Maybe<Scalars["Int"]>;
};

/** columns and relationships of "products" */
export type ProductsOutlet_Product_SuppliersArgs = {
  distinct_on?: Maybe<Array<Outlet_Product_Suppliers_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Outlet_Product_Suppliers_Order_By>>;
  where?: Maybe<Outlet_Product_Suppliers_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "products". All fields are combined with a logical 'AND'. */
export type Products_Bool_Exp = {
  _and?: Maybe<Array<Products_Bool_Exp>>;
  _not?: Maybe<Products_Bool_Exp>;
  _or?: Maybe<Array<Products_Bool_Exp>>;
  active?: Maybe<Boolean_Comparison_Exp>;
  brand?: Maybe<Brands_Bool_Exp>;
  brand_id?: Maybe<Int_Comparison_Exp>;
  code?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  loose_uom?: Maybe<Uoms_Bool_Exp>;
  loose_uom_id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  outlet_product_suppliers?: Maybe<Outlet_Product_Suppliers_Bool_Exp>;
  whole_uom?: Maybe<Uoms_Bool_Exp>;
  whole_uom_id?: Maybe<Int_Comparison_Exp>;
};

/** Ordering options when selecting data from "products". */
export type Products_Order_By = {
  active?: Maybe<Order_By>;
  brand?: Maybe<Brands_Order_By>;
  brand_id?: Maybe<Order_By>;
  code?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  loose_uom?: Maybe<Uoms_Order_By>;
  loose_uom_id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  outlet_product_suppliers_aggregate?: Maybe<Outlet_Product_Suppliers_Aggregate_Order_By>;
  whole_uom?: Maybe<Uoms_Order_By>;
  whole_uom_id?: Maybe<Order_By>;
};

/** select columns of table "products" */
export enum Products_Select_Column {
  /** column name */
  Active = "active",
  /** column name */
  BrandId = "brand_id",
  /** column name */
  Code = "code",
  /** column name */
  Id = "id",
  /** column name */
  LooseUomId = "loose_uom_id",
  /** column name */
  Name = "name",
  /** column name */
  WholeUomId = "whole_uom_id",
}

export type Query_Root = {
  __typename?: "query_root";
  /** fetch data from the table: "brands" */
  brands: Array<Brands>;
  /** fetch data from the table: "brands" using primary key columns */
  brands_by_pk?: Maybe<Brands>;
  /** fetch data from the table: "dates" */
  dates: Array<Dates>;
  /** fetch data from the table: "dates" using primary key columns */
  dates_by_pk?: Maybe<Dates>;
  /** execute function "delivery_dates" which returns "dates" */
  delivery_dates: Array<Dates>;
  /** An array relationship */
  line_items: Array<Line_Items>;
  /** fetch data from the table: "line_items" using primary key columns */
  line_items_by_pk?: Maybe<Line_Items>;
  /** fetch data from the table: "orders" */
  orders: Array<Orders>;
  /** fetch aggregated fields from the table: "orders" */
  orders_aggregate: Orders_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
  /** An array relationship */
  outlet_product_suppliers: Array<Outlet_Product_Suppliers>;
  /** fetch data from the table: "outlet_product_suppliers" using primary key columns */
  outlet_product_suppliers_by_pk?: Maybe<Outlet_Product_Suppliers>;
  /** fetch data from the table: "outlets" */
  outlets: Array<Outlets>;
  /** fetch data from the table: "outlets" using primary key columns */
  outlets_by_pk?: Maybe<Outlets>;
  /** fetch data from the table: "products" */
  products: Array<Products>;
  /** fetch data from the table: "products" using primary key columns */
  products_by_pk?: Maybe<Products>;
  /** fetch data from the table: "suppliers" */
  suppliers: Array<Suppliers>;
  /** fetch data from the table: "suppliers" using primary key columns */
  suppliers_by_pk?: Maybe<Suppliers>;
  /** fetch data from the table: "uoms" */
  uoms: Array<Uoms>;
  /** fetch data from the table: "uoms" using primary key columns */
  uoms_by_pk?: Maybe<Uoms>;
};

export type Query_RootBrandsArgs = {
  distinct_on?: Maybe<Array<Brands_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Brands_Order_By>>;
  where?: Maybe<Brands_Bool_Exp>;
};

export type Query_RootBrands_By_PkArgs = {
  id: Scalars["Int"];
};

export type Query_RootDatesArgs = {
  distinct_on?: Maybe<Array<Dates_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Dates_Order_By>>;
  where?: Maybe<Dates_Bool_Exp>;
};

export type Query_RootDates_By_PkArgs = {
  value: Scalars["date"];
};

export type Query_RootDelivery_DatesArgs = {
  args: Delivery_Dates_Args;
  distinct_on?: Maybe<Array<Dates_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Dates_Order_By>>;
  where?: Maybe<Dates_Bool_Exp>;
};

export type Query_RootLine_ItemsArgs = {
  distinct_on?: Maybe<Array<Line_Items_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Line_Items_Order_By>>;
  where?: Maybe<Line_Items_Bool_Exp>;
};

export type Query_RootLine_Items_By_PkArgs = {
  id: Scalars["Int"];
};

export type Query_RootOrdersArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};

export type Query_RootOrders_AggregateArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};

export type Query_RootOrders_By_PkArgs = {
  id: Scalars["Int"];
};

export type Query_RootOutlet_Product_SuppliersArgs = {
  distinct_on?: Maybe<Array<Outlet_Product_Suppliers_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Outlet_Product_Suppliers_Order_By>>;
  where?: Maybe<Outlet_Product_Suppliers_Bool_Exp>;
};

export type Query_RootOutlet_Product_Suppliers_By_PkArgs = {
  outlet_id: Scalars["Int"];
  product_id: Scalars["Int"];
  supplier_id: Scalars["Int"];
};

export type Query_RootOutletsArgs = {
  distinct_on?: Maybe<Array<Outlets_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Outlets_Order_By>>;
  where?: Maybe<Outlets_Bool_Exp>;
};

export type Query_RootOutlets_By_PkArgs = {
  id: Scalars["Int"];
};

export type Query_RootProductsArgs = {
  distinct_on?: Maybe<Array<Products_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Products_Order_By>>;
  where?: Maybe<Products_Bool_Exp>;
};

export type Query_RootProducts_By_PkArgs = {
  id: Scalars["Int"];
};

export type Query_RootSuppliersArgs = {
  distinct_on?: Maybe<Array<Suppliers_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Suppliers_Order_By>>;
  where?: Maybe<Suppliers_Bool_Exp>;
};

export type Query_RootSuppliers_By_PkArgs = {
  id: Scalars["Int"];
};

export type Query_RootUomsArgs = {
  distinct_on?: Maybe<Array<Uoms_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Uoms_Order_By>>;
  where?: Maybe<Uoms_Bool_Exp>;
};

export type Query_RootUoms_By_PkArgs = {
  id: Scalars["Int"];
};

export type Set_Quantity_Args = {
  loose_quantity?: Maybe<Scalars["Int"]>;
  order_id?: Maybe<Scalars["Int"]>;
  product_id?: Maybe<Scalars["Int"]>;
  whole_quantity?: Maybe<Scalars["Int"]>;
};

export type Submit_Order_Args = {
  delivery_on?: Maybe<Scalars["date"]>;
  order_id?: Maybe<Scalars["Int"]>;
};

export type Subscription_Root = {
  __typename?: "subscription_root";
  /** fetch data from the table: "brands" */
  brands: Array<Brands>;
  /** fetch data from the table: "brands" using primary key columns */
  brands_by_pk?: Maybe<Brands>;
  /** fetch data from the table: "dates" */
  dates: Array<Dates>;
  /** fetch data from the table: "dates" using primary key columns */
  dates_by_pk?: Maybe<Dates>;
  /** execute function "delivery_dates" which returns "dates" */
  delivery_dates: Array<Dates>;
  /** An array relationship */
  line_items: Array<Line_Items>;
  /** fetch data from the table: "line_items" using primary key columns */
  line_items_by_pk?: Maybe<Line_Items>;
  /** fetch data from the table: "orders" */
  orders: Array<Orders>;
  /** fetch aggregated fields from the table: "orders" */
  orders_aggregate: Orders_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
  /** An array relationship */
  outlet_product_suppliers: Array<Outlet_Product_Suppliers>;
  /** fetch data from the table: "outlet_product_suppliers" using primary key columns */
  outlet_product_suppliers_by_pk?: Maybe<Outlet_Product_Suppliers>;
  /** fetch data from the table: "outlets" */
  outlets: Array<Outlets>;
  /** fetch data from the table: "outlets" using primary key columns */
  outlets_by_pk?: Maybe<Outlets>;
  /** fetch data from the table: "products" */
  products: Array<Products>;
  /** fetch data from the table: "products" using primary key columns */
  products_by_pk?: Maybe<Products>;
  /** fetch data from the table: "suppliers" */
  suppliers: Array<Suppliers>;
  /** fetch data from the table: "suppliers" using primary key columns */
  suppliers_by_pk?: Maybe<Suppliers>;
  /** fetch data from the table: "uoms" */
  uoms: Array<Uoms>;
  /** fetch data from the table: "uoms" using primary key columns */
  uoms_by_pk?: Maybe<Uoms>;
};

export type Subscription_RootBrandsArgs = {
  distinct_on?: Maybe<Array<Brands_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Brands_Order_By>>;
  where?: Maybe<Brands_Bool_Exp>;
};

export type Subscription_RootBrands_By_PkArgs = {
  id: Scalars["Int"];
};

export type Subscription_RootDatesArgs = {
  distinct_on?: Maybe<Array<Dates_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Dates_Order_By>>;
  where?: Maybe<Dates_Bool_Exp>;
};

export type Subscription_RootDates_By_PkArgs = {
  value: Scalars["date"];
};

export type Subscription_RootDelivery_DatesArgs = {
  args: Delivery_Dates_Args;
  distinct_on?: Maybe<Array<Dates_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Dates_Order_By>>;
  where?: Maybe<Dates_Bool_Exp>;
};

export type Subscription_RootLine_ItemsArgs = {
  distinct_on?: Maybe<Array<Line_Items_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Line_Items_Order_By>>;
  where?: Maybe<Line_Items_Bool_Exp>;
};

export type Subscription_RootLine_Items_By_PkArgs = {
  id: Scalars["Int"];
};

export type Subscription_RootOrdersArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};

export type Subscription_RootOrders_AggregateArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};

export type Subscription_RootOrders_By_PkArgs = {
  id: Scalars["Int"];
};

export type Subscription_RootOutlet_Product_SuppliersArgs = {
  distinct_on?: Maybe<Array<Outlet_Product_Suppliers_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Outlet_Product_Suppliers_Order_By>>;
  where?: Maybe<Outlet_Product_Suppliers_Bool_Exp>;
};

export type Subscription_RootOutlet_Product_Suppliers_By_PkArgs = {
  outlet_id: Scalars["Int"];
  product_id: Scalars["Int"];
  supplier_id: Scalars["Int"];
};

export type Subscription_RootOutletsArgs = {
  distinct_on?: Maybe<Array<Outlets_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Outlets_Order_By>>;
  where?: Maybe<Outlets_Bool_Exp>;
};

export type Subscription_RootOutlets_By_PkArgs = {
  id: Scalars["Int"];
};

export type Subscription_RootProductsArgs = {
  distinct_on?: Maybe<Array<Products_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Products_Order_By>>;
  where?: Maybe<Products_Bool_Exp>;
};

export type Subscription_RootProducts_By_PkArgs = {
  id: Scalars["Int"];
};

export type Subscription_RootSuppliersArgs = {
  distinct_on?: Maybe<Array<Suppliers_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Suppliers_Order_By>>;
  where?: Maybe<Suppliers_Bool_Exp>;
};

export type Subscription_RootSuppliers_By_PkArgs = {
  id: Scalars["Int"];
};

export type Subscription_RootUomsArgs = {
  distinct_on?: Maybe<Array<Uoms_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Uoms_Order_By>>;
  where?: Maybe<Uoms_Bool_Exp>;
};

export type Subscription_RootUoms_By_PkArgs = {
  id: Scalars["Int"];
};

export enum Supplier_Types_Enum {
  /** Direct Supplier */
  Direct = "DIRECT",
  /** Headquarter */
  Hq = "HQ",
  /** Warehouse Supplier */
  Warehouse = "WAREHOUSE",
}

/** Boolean expression to compare columns of type "supplier_types_enum". All fields are combined with logical 'AND'. */
export type Supplier_Types_Enum_Comparison_Exp = {
  _eq?: Maybe<Supplier_Types_Enum>;
  _in?: Maybe<Array<Supplier_Types_Enum>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _neq?: Maybe<Supplier_Types_Enum>;
  _nin?: Maybe<Array<Supplier_Types_Enum>>;
};

/** columns and relationships of "suppliers" */
export type Suppliers = {
  __typename?: "suppliers";
  email?: Maybe<Scalars["String"]>;
  id: Scalars["Int"];
  name: Scalars["String"];
  note?: Maybe<Scalars["String"]>;
  /** An array relationship */
  outlet_product_suppliers: Array<Outlet_Product_Suppliers>;
  phone?: Maybe<Scalars["String"]>;
  type: Supplier_Types_Enum;
};

/** columns and relationships of "suppliers" */
export type SuppliersOutlet_Product_SuppliersArgs = {
  distinct_on?: Maybe<Array<Outlet_Product_Suppliers_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Outlet_Product_Suppliers_Order_By>>;
  where?: Maybe<Outlet_Product_Suppliers_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "suppliers". All fields are combined with a logical 'AND'. */
export type Suppliers_Bool_Exp = {
  _and?: Maybe<Array<Suppliers_Bool_Exp>>;
  _not?: Maybe<Suppliers_Bool_Exp>;
  _or?: Maybe<Array<Suppliers_Bool_Exp>>;
  email?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  note?: Maybe<String_Comparison_Exp>;
  outlet_product_suppliers?: Maybe<Outlet_Product_Suppliers_Bool_Exp>;
  phone?: Maybe<String_Comparison_Exp>;
  type?: Maybe<Supplier_Types_Enum_Comparison_Exp>;
};

/** Ordering options when selecting data from "suppliers". */
export type Suppliers_Order_By = {
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  note?: Maybe<Order_By>;
  outlet_product_suppliers_aggregate?: Maybe<Outlet_Product_Suppliers_Aggregate_Order_By>;
  phone?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** select columns of table "suppliers" */
export enum Suppliers_Select_Column {
  /** column name */
  Email = "email",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  Note = "note",
  /** column name */
  Phone = "phone",
  /** column name */
  Type = "type",
}

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars["timestamptz"]>;
  _gt?: Maybe<Scalars["timestamptz"]>;
  _gte?: Maybe<Scalars["timestamptz"]>;
  _in?: Maybe<Array<Scalars["timestamptz"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["timestamptz"]>;
  _lte?: Maybe<Scalars["timestamptz"]>;
  _neq?: Maybe<Scalars["timestamptz"]>;
  _nin?: Maybe<Array<Scalars["timestamptz"]>>;
};

export enum Uom_Types_Enum {
  Loose = "LOOSE",
  Whole = "WHOLE",
}

/** Boolean expression to compare columns of type "uom_types_enum". All fields are combined with logical 'AND'. */
export type Uom_Types_Enum_Comparison_Exp = {
  _eq?: Maybe<Uom_Types_Enum>;
  _in?: Maybe<Array<Uom_Types_Enum>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _neq?: Maybe<Uom_Types_Enum>;
  _nin?: Maybe<Array<Uom_Types_Enum>>;
};

/** columns and relationships of "uoms" */
export type Uoms = {
  __typename?: "uoms";
  id: Scalars["Int"];
  name: Scalars["String"];
  type: Uom_Types_Enum;
  unit: Scalars["String"];
};

/** Boolean expression to filter rows from the table "uoms". All fields are combined with a logical 'AND'. */
export type Uoms_Bool_Exp = {
  _and?: Maybe<Array<Uoms_Bool_Exp>>;
  _not?: Maybe<Uoms_Bool_Exp>;
  _or?: Maybe<Array<Uoms_Bool_Exp>>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  type?: Maybe<Uom_Types_Enum_Comparison_Exp>;
  unit?: Maybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "uoms". */
export type Uoms_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  unit?: Maybe<Order_By>;
};

/** select columns of table "uoms" */
export enum Uoms_Select_Column {
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  Type = "type",
  /** column name */
  Unit = "unit",
}

export type GetCartContentSubscriptionVariables = Exact<{
  cartId: Scalars["Int"];
}>;

export type GetCartContentSubscription = {
  __typename?: "subscription_root";
} & {
  orders_by_pk?: Maybe<
    { __typename?: "orders" } & {
      line_items: Array<
        { __typename?: "line_items" } & Pick<
          Line_Items,
          "product_id" | "loose_quantity" | "whole_quantity"
        >
      >;
    }
  >;
};

export type GetCartIdMutationVariables = Exact<{
  outletId: Scalars["Int"];
  supplierId: Scalars["Int"];
}>;

export type GetCartIdMutation = { __typename?: "mutation_root" } & {
  find_or_create_cart: Array<{ __typename?: "orders" } & Pick<Orders, "id">>;
};

export type GetMyOutletsQueryVariables = Exact<{ [key: string]: never }>;

export type GetMyOutletsQuery = { __typename?: "query_root" } & {
  outlets: Array<
    { __typename?: "outlets" } & Pick<
      Outlets,
      "id" | "name" | "address" | "email" | "note" | "phone"
    >
  >;
};

export type GetOutletQueryVariables = Exact<{
  outletId: Scalars["Int"];
}>;

export type GetOutletQuery = { __typename?: "query_root" } & {
  outlets_by_pk?: Maybe<
    { __typename?: "outlets" } & Pick<
      Outlets,
      "id" | "name" | "address" | "email" | "note" | "phone"
    >
  >;
};

export type GetProductQueryVariables = Exact<{
  productId: Scalars["Int"];
}>;

export type GetProductQuery = { __typename?: "query_root" } & {
  products_by_pk?: Maybe<
    { __typename?: "products" } & Pick<Products, "name" | "id" | "code"> & {
        loose_uom?: Maybe<
          { __typename?: "uoms" } & Pick<Uoms, "name" | "unit">
        >;
        whole_uom?: Maybe<
          { __typename?: "uoms" } & Pick<Uoms, "name" | "unit">
        >;
      }
  >;
};

export type GetSupplierQueryVariables = Exact<{
  supplierId: Scalars["Int"];
}>;

export type GetSupplierQuery = { __typename?: "query_root" } & {
  suppliers_by_pk?: Maybe<
    { __typename?: "suppliers" } & Pick<
      Suppliers,
      "id" | "name" | "email" | "phone" | "type" | "note"
    >
  >;
};

export type GetSupplierDetailsQueryVariables = Exact<{
  outletId: Scalars["Int"];
  supplierId: Scalars["Int"];
}>;

export type GetSupplierDetailsQuery = { __typename?: "query_root" } & {
  suppliers_by_pk?: Maybe<
    { __typename?: "suppliers" } & Pick<
      Suppliers,
      "id" | "name" | "email" | "phone" | "type" | "note"
    >
  >;
  outlet_product_suppliers: Array<
    { __typename?: "outlet_product_suppliers" } & {
      product: { __typename?: "products" } & Pick<
        Products,
        "name" | "id" | "code"
      > & {
          loose_uom?: Maybe<
            { __typename?: "uoms" } & Pick<Uoms, "name" | "unit">
          >;
          whole_uom?: Maybe<
            { __typename?: "uoms" } & Pick<Uoms, "name" | "unit">
          >;
        };
    }
  >;
};

export type GetSuppliersListQueryVariables = Exact<{
  outletId: Scalars["Int"];
  type: Supplier_Types_Enum;
}>;

export type GetSuppliersListQuery = { __typename?: "query_root" } & {
  outlet_product_suppliers: Array<
    { __typename?: "outlet_product_suppliers" } & {
      supplier: { __typename?: "suppliers" } & Pick<
        Suppliers,
        "id" | "name" | "phone" | "email"
      >;
    }
  >;
};

export type SetCartItemMutationVariables = Exact<{
  orderId: Scalars["Int"];
  productId: Scalars["Int"];
  whole: Scalars["Int"];
  loose: Scalars["Int"];
}>;

export type SetCartItemMutation = { __typename?: "mutation_root" } & {
  set_quantity: Array<{ __typename?: "line_items" } & Pick<Line_Items, "id">>;
};

export const GetCartContentDocument = gql`
  subscription getCartContent($cartId: Int!) {
    orders_by_pk(id: $cartId) {
      line_items {
        product_id
        loose_quantity
        whole_quantity
      }
    }
  }
`;

/**
 * __useGetCartContentSubscription__
 *
 * To run a query within a React component, call `useGetCartContentSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGetCartContentSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCartContentSubscription({
 *   variables: {
 *      cartId: // value for 'cartId'
 *   },
 * });
 */
export function useGetCartContentSubscription(
  baseOptions: Apollo.SubscriptionHookOptions<
    GetCartContentSubscription,
    GetCartContentSubscriptionVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSubscription<
    GetCartContentSubscription,
    GetCartContentSubscriptionVariables
  >(GetCartContentDocument, options);
}
export type GetCartContentSubscriptionHookResult = ReturnType<
  typeof useGetCartContentSubscription
>;
export type GetCartContentSubscriptionResult = Apollo.SubscriptionResult<GetCartContentSubscription>;
export const GetCartIdDocument = gql`
  mutation GetCartId($outletId: Int!, $supplierId: Int!) {
    find_or_create_cart(
      args: { outlet_id: $outletId, supplier_id: $supplierId }
    ) {
      id
    }
  }
`;
export type GetCartIdMutationFn = Apollo.MutationFunction<
  GetCartIdMutation,
  GetCartIdMutationVariables
>;

/**
 * __useGetCartIdMutation__
 *
 * To run a mutation, you first call `useGetCartIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGetCartIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [getCartIdMutation, { data, loading, error }] = useGetCartIdMutation({
 *   variables: {
 *      outletId: // value for 'outletId'
 *      supplierId: // value for 'supplierId'
 *   },
 * });
 */
export function useGetCartIdMutation(
  baseOptions?: Apollo.MutationHookOptions<
    GetCartIdMutation,
    GetCartIdMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<GetCartIdMutation, GetCartIdMutationVariables>(
    GetCartIdDocument,
    options,
  );
}
export type GetCartIdMutationHookResult = ReturnType<
  typeof useGetCartIdMutation
>;
export type GetCartIdMutationResult = Apollo.MutationResult<GetCartIdMutation>;
export type GetCartIdMutationOptions = Apollo.BaseMutationOptions<
  GetCartIdMutation,
  GetCartIdMutationVariables
>;
export const GetMyOutletsDocument = gql`
  query getMyOutlets {
    outlets {
      id
      name
      address
      email
      note
      phone
    }
  }
`;

/**
 * __useGetMyOutletsQuery__
 *
 * To run a query within a React component, call `useGetMyOutletsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyOutletsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyOutletsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMyOutletsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetMyOutletsQuery,
    GetMyOutletsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetMyOutletsQuery, GetMyOutletsQueryVariables>(
    GetMyOutletsDocument,
    options,
  );
}
export function useGetMyOutletsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetMyOutletsQuery,
    GetMyOutletsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetMyOutletsQuery, GetMyOutletsQueryVariables>(
    GetMyOutletsDocument,
    options,
  );
}
export type GetMyOutletsQueryHookResult = ReturnType<
  typeof useGetMyOutletsQuery
>;
export type GetMyOutletsLazyQueryHookResult = ReturnType<
  typeof useGetMyOutletsLazyQuery
>;
export type GetMyOutletsQueryResult = Apollo.QueryResult<
  GetMyOutletsQuery,
  GetMyOutletsQueryVariables
>;
export const GetOutletDocument = gql`
  query getOutlet($outletId: Int!) {
    outlets_by_pk(id: $outletId) {
      id
      name
      address
      email
      note
      phone
    }
  }
`;

/**
 * __useGetOutletQuery__
 *
 * To run a query within a React component, call `useGetOutletQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOutletQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOutletQuery({
 *   variables: {
 *      outletId: // value for 'outletId'
 *   },
 * });
 */
export function useGetOutletQuery(
  baseOptions: Apollo.QueryHookOptions<GetOutletQuery, GetOutletQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetOutletQuery, GetOutletQueryVariables>(
    GetOutletDocument,
    options,
  );
}
export function useGetOutletLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetOutletQuery,
    GetOutletQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetOutletQuery, GetOutletQueryVariables>(
    GetOutletDocument,
    options,
  );
}
export type GetOutletQueryHookResult = ReturnType<typeof useGetOutletQuery>;
export type GetOutletLazyQueryHookResult = ReturnType<
  typeof useGetOutletLazyQuery
>;
export type GetOutletQueryResult = Apollo.QueryResult<
  GetOutletQuery,
  GetOutletQueryVariables
>;
export const GetProductDocument = gql`
  query getProduct($productId: Int!) {
    products_by_pk(id: $productId) {
      name
      id
      code
      loose_uom {
        name
        unit
      }
      whole_uom {
        name
        unit
      }
    }
  }
`;

/**
 * __useGetProductQuery__
 *
 * To run a query within a React component, call `useGetProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductQuery({
 *   variables: {
 *      productId: // value for 'productId'
 *   },
 * });
 */
export function useGetProductQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetProductQuery,
    GetProductQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetProductQuery, GetProductQueryVariables>(
    GetProductDocument,
    options,
  );
}
export function useGetProductLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetProductQuery,
    GetProductQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetProductQuery, GetProductQueryVariables>(
    GetProductDocument,
    options,
  );
}
export type GetProductQueryHookResult = ReturnType<typeof useGetProductQuery>;
export type GetProductLazyQueryHookResult = ReturnType<
  typeof useGetProductLazyQuery
>;
export type GetProductQueryResult = Apollo.QueryResult<
  GetProductQuery,
  GetProductQueryVariables
>;
export const GetSupplierDocument = gql`
  query getSupplier($supplierId: Int!) {
    suppliers_by_pk(id: $supplierId) {
      id
      name
      email
      phone
      type
      note
    }
  }
`;

/**
 * __useGetSupplierQuery__
 *
 * To run a query within a React component, call `useGetSupplierQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSupplierQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSupplierQuery({
 *   variables: {
 *      supplierId: // value for 'supplierId'
 *   },
 * });
 */
export function useGetSupplierQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetSupplierQuery,
    GetSupplierQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetSupplierQuery, GetSupplierQueryVariables>(
    GetSupplierDocument,
    options,
  );
}
export function useGetSupplierLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetSupplierQuery,
    GetSupplierQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetSupplierQuery, GetSupplierQueryVariables>(
    GetSupplierDocument,
    options,
  );
}
export type GetSupplierQueryHookResult = ReturnType<typeof useGetSupplierQuery>;
export type GetSupplierLazyQueryHookResult = ReturnType<
  typeof useGetSupplierLazyQuery
>;
export type GetSupplierQueryResult = Apollo.QueryResult<
  GetSupplierQuery,
  GetSupplierQueryVariables
>;
export const GetSupplierDetailsDocument = gql`
  query getSupplierDetails($outletId: Int!, $supplierId: Int!) {
    suppliers_by_pk(id: $supplierId) {
      id
      name
      email
      phone
      type
      note
    }
    outlet_product_suppliers(
      where: {
        outlet_id: { _eq: $outletId }
        supplier_id: { _eq: $supplierId }
      }
    ) {
      product {
        name
        id
        code
        loose_uom {
          name
          unit
        }
        whole_uom {
          name
          unit
        }
      }
    }
  }
`;

/**
 * __useGetSupplierDetailsQuery__
 *
 * To run a query within a React component, call `useGetSupplierDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSupplierDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSupplierDetailsQuery({
 *   variables: {
 *      outletId: // value for 'outletId'
 *      supplierId: // value for 'supplierId'
 *   },
 * });
 */
export function useGetSupplierDetailsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetSupplierDetailsQuery,
    GetSupplierDetailsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetSupplierDetailsQuery,
    GetSupplierDetailsQueryVariables
  >(GetSupplierDetailsDocument, options);
}
export function useGetSupplierDetailsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetSupplierDetailsQuery,
    GetSupplierDetailsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetSupplierDetailsQuery,
    GetSupplierDetailsQueryVariables
  >(GetSupplierDetailsDocument, options);
}
export type GetSupplierDetailsQueryHookResult = ReturnType<
  typeof useGetSupplierDetailsQuery
>;
export type GetSupplierDetailsLazyQueryHookResult = ReturnType<
  typeof useGetSupplierDetailsLazyQuery
>;
export type GetSupplierDetailsQueryResult = Apollo.QueryResult<
  GetSupplierDetailsQuery,
  GetSupplierDetailsQueryVariables
>;
export const GetSuppliersListDocument = gql`
  query getSuppliersList($outletId: Int!, $type: supplier_types_enum!) {
    outlet_product_suppliers(
      where: {
        outlet_id: { _eq: $outletId }
        supplier: { type: { _eq: $type } }
      }
      distinct_on: supplier_id
    ) {
      supplier {
        id
        name
        phone
        email
      }
    }
  }
`;

/**
 * __useGetSuppliersListQuery__
 *
 * To run a query within a React component, call `useGetSuppliersListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSuppliersListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSuppliersListQuery({
 *   variables: {
 *      outletId: // value for 'outletId'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useGetSuppliersListQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetSuppliersListQuery,
    GetSuppliersListQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetSuppliersListQuery, GetSuppliersListQueryVariables>(
    GetSuppliersListDocument,
    options,
  );
}
export function useGetSuppliersListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetSuppliersListQuery,
    GetSuppliersListQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetSuppliersListQuery,
    GetSuppliersListQueryVariables
  >(GetSuppliersListDocument, options);
}
export type GetSuppliersListQueryHookResult = ReturnType<
  typeof useGetSuppliersListQuery
>;
export type GetSuppliersListLazyQueryHookResult = ReturnType<
  typeof useGetSuppliersListLazyQuery
>;
export type GetSuppliersListQueryResult = Apollo.QueryResult<
  GetSuppliersListQuery,
  GetSuppliersListQueryVariables
>;
export const SetCartItemDocument = gql`
  mutation setCartItem(
    $orderId: Int!
    $productId: Int!
    $whole: Int!
    $loose: Int!
  ) {
    set_quantity(
      args: {
        loose_quantity: $loose
        order_id: $orderId
        product_id: $productId
        whole_quantity: $whole
      }
    ) {
      id
    }
  }
`;
export type SetCartItemMutationFn = Apollo.MutationFunction<
  SetCartItemMutation,
  SetCartItemMutationVariables
>;

/**
 * __useSetCartItemMutation__
 *
 * To run a mutation, you first call `useSetCartItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetCartItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setCartItemMutation, { data, loading, error }] = useSetCartItemMutation({
 *   variables: {
 *      orderId: // value for 'orderId'
 *      productId: // value for 'productId'
 *      whole: // value for 'whole'
 *      loose: // value for 'loose'
 *   },
 * });
 */
export function useSetCartItemMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SetCartItemMutation,
    SetCartItemMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SetCartItemMutation, SetCartItemMutationVariables>(
    SetCartItemDocument,
    options,
  );
}
export type SetCartItemMutationHookResult = ReturnType<
  typeof useSetCartItemMutation
>;
export type SetCartItemMutationResult = Apollo.MutationResult<SetCartItemMutation>;
export type SetCartItemMutationOptions = Apollo.BaseMutationOptions<
  SetCartItemMutation,
  SetCartItemMutationVariables
>;
