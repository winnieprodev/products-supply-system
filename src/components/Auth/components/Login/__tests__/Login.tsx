import { render } from "@testing-library/react";

import Login from "../Login";

describe("Login", () => {
  describe("Snapshot tests", () => {
    test("it matches the snapshot", () => {
      const { container } = render(<Login onClick={jest.fn()}>test</Login>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
