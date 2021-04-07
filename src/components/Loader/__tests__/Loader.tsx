import { render } from "@testing-library/react";

import Loader from "../Loader";

describe("Loader", () => {
  describe("Snapshot tests", () => {
    test("it matches the snapshot", () => {
      const { container } = render(<Loader />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
