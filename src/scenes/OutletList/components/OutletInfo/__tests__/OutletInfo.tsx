import { render } from "@testing-library/react";

import OutletInfo from "../OutletInfo";

describe("OutletInfo", () => {
  describe("Snapshot tests", () => {
    test("it matches the snapshot", () => {
      const { container } = render(
        <OutletInfo address="test-address" phone="test-phone" />,
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
