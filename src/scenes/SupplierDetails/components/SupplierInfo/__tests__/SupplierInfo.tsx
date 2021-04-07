import { render } from "@testing-library/react";

import SupplierInfo from "../SupplierInfo";

describe("SupplierInfo", () => {
  describe("Snapshot tests", () => {
    test("it matches the snapshot", () => {
      const { container } = render(
        <SupplierInfo
          info={{
            id: "",
            mono: "BF",
            title: "Ben's Food",
            phone: "67772869",
            email: "fsorder@benfoods.com",
          }}
        />,
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
