import {
  Outlet,
  Product,
  Staff,
  Supplier,
  Order,
  OrderState,
  Error,
  Cart,
  Async,
} from "models";

export const mockAsync = <T>(
  data: T,
  isLoading = false,
  error = undefined,
): Async<T> => ({ isLoading, data, error });

export const mockProduct = (id: string): Product => ({
  id,
  image: "src",
  title: "Whipping Cream 35% 1L",
  quantities: [
    { type: "loose" as any, name: "Litter", description: "12 x 1L" },
  ],
  delivery: "tomorrow",
});

export const mockSupplier = (
  title: string,
  id = title.toLowerCase().replace(/[^\w]/gi, "-"),
  remarks?: string,
): Supplier => ({
  id,
  title,
  mono: title
    .split(" ")
    .map((word) => word[0])
    .join(""),
  phone: "0-400 121-201-20",
  email: `${title.split(" ")[0]}@mail.com`,
  remarks,
  fax: "",
});

export const mockOutlet = (id: string): Outlet => ({
  id,
  code: "STV",
  fullname: "Star Vista",
  address: "#B1-39, 1 Vista Exchange Green Singapore 138617",
  phone: "66944033",
  email: "test@email.com",
});

export const mockStaff = (id: string): Staff => ({
  id,
  fullname: "John Doe",
  phone: "66944033",
});

export const mockOrder = (
  id: string,
  createdDate: string,
  state: OrderState,
  finishedDate?: string,
): Order => ({
  id,
  supplier: mockSupplier(
    "Ben's Food",
    "id",
    "MOQ: $80 above ($20 will be applied, if fail to fulfill)",
  ),
  createdDate,
  finishedDate,
  itemCount: 2,
  state,
});

export const mockError = (message: string): Error => ({ message });

export const mockCart = (amountProducts: number): Cart =>
  new Array(amountProducts).fill({
    productId: "id",
    quantities: [],
  });
