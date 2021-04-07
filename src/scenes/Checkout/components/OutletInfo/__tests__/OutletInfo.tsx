import { render } from "@testing-library/react";
import { mockOutlet } from "utils";

import OutletRadio from "../OutletInfo";

describe("OutletRadio", () => {
  describe("Snapshot tests", () => {
    test("it matches the snapshot", () => {
      const { container } = render(<OutletRadio item={mockOutlet("id")} />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
