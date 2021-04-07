import { render } from "@testing-library/react";

import CartAnchor from "../CartAnchor";

describe("CartAnchor", () => {
  describe("Snapshot tests", () => {
    test("it matches the snapshot for 0 amount", () => {
      const { container } = render(<CartAnchor amount={0} />);
      expect(container.firstChild).toMatchSnapshot();
    });
    test("it matches the snapshot for 5 amount", () => {
      const { container } = render(<CartAnchor amount={5} />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
