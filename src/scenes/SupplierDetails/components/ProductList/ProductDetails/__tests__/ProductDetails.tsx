import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { mockProduct, mockSupplier } from "utils";

import ProductDetails from "../ProductDetails";

describe("ProductDetails", () => {
  describe("Snapshot tests", () => {
    test("it matches the snapshot", () => {
      const { container } = render(
        <BrowserRouter>
          <ProductDetails
            item={mockProduct("id1")}
            onClose={jest.fn()}
            supplier={mockSupplier("test supplier")}
          ></ProductDetails>
        </BrowserRouter>,
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
