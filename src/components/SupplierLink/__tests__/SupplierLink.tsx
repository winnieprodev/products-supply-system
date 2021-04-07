import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { mockSupplier } from "utils";

import SupplierLink from "../SupplierLink";

describe("SupplierLink", () => {
  describe("Snapshot tests", () => {
    test("it matches the snapshot", () => {
      const { container } = render(
        <BrowserRouter>
          <SupplierLink
            outletId="id"
            item={mockSupplier("title test")}
            supplierType="local"
          />
        </BrowserRouter>,
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
