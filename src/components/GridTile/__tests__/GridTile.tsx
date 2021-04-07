import { render } from "@testing-library/react";

import GridTile from "../GridTile";

describe("GridTile", () => {
  describe("Snapshot tests", () => {
    test("it matches the snapshot for image", () => {
      const { container } = render(
        <GridTile title="test" image="img.png" onClick={jest.fn()}></GridTile>,
      );
      expect(container.firstChild).toMatchSnapshot();
    });
    test("it matches the snapshot for mono", () => {
      const { container } = render(
        <GridTile title="test" mono="TES" onClick={jest.fn()}></GridTile>,
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
