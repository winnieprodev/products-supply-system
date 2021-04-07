import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { mockProduct, mockSupplier } from "utils";

import ProductList from "../ProductList";

describe("ProductList", () => {
  describe("Snapshot tests", () => {
    test("it matches the snapshot for basic use", () => {
      const { container } = render(
        <BrowserRouter>
          <ProductList
            outletId="outletId"
            items={[mockProduct("id1"), mockProduct("id2")]}
            supplierId="supplierId"
            supplierType="local"
            supplier={mockSupplier("test supplier")}
            selectedProductId={undefined}
          />
        </BrowserRouter>,
      );
      expect(container.firstChild).toMatchSnapshot();
    });
    test("it matches the snapshot when item is selected", () => {
      const { container } = render(
        <BrowserRouter>
          <ProductList
            outletId="outletId"
            items={[mockProduct("id1"), mockProduct("id2")]}
            supplierId="supplierId"
            supplierType="local"
            supplier={mockSupplier("test supplier")}
            selectedProductId="id1"
          />
        </BrowserRouter>,
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
