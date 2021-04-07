import { render } from "@testing-library/react";
import { mockProduct } from "utils";

import ProductTile from "../ProductTile";

describe("ProductTile", () => {
  describe("Snapshot tests", () => {
    test("it matches the snapshot", () => {
      const { container } = render(
        <ProductTile
          item={mockProduct("id1")}
          onClick={jest.fn()}
          isSelected={false}
        ></ProductTile>,
      );
      expect(container.firstChild).toMatchSnapshot();
    });
    test("it matches the snapshot with selected = index", () => {
      const { container } = render(
        <ProductTile
          item={mockProduct("id1")}
          onClick={jest.fn()}
          isSelected={true}
        ></ProductTile>,
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
