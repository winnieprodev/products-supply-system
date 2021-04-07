import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { mockAsync, mockSupplier } from "utils";

import SuppliersList from "../SuppliersList";

// import { useGetSuppliers } from "queries";
jest.mock("queries", () => ({
  useGetSuppliersList: () =>
    mockAsync([
      mockSupplier("test supplier A"),
      mockSupplier("test supplier B"),
    ]),
}));

describe("SuppliersList", () => {
  describe("Snapshot tests", () => {
    test("it matches the snapshot", () => {
      const { container } = render(
        <BrowserRouter>
          <SuppliersList />
        </BrowserRouter>,
      );
      expect(container).toMatchSnapshot();
    });
  });
});
