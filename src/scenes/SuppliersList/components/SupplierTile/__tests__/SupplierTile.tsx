import { render } from "@testing-library/react";
import { mockSupplier } from "utils";

import SupplierTile from "../SupplierTile";

describe("SupplierTile", () => {
  describe("Snapshot tests", () => {
    test("it matches the snapshot", () => {
      const { container } = render(
        <SupplierTile
          item={mockSupplier("id1")}
          onClick={jest.fn()}
        ></SupplierTile>,
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
