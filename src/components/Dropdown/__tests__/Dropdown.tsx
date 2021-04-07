import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Dropdown from "../Dropdown";

describe("Dropdown", () => {
  describe("Snapshot tests", () => {
    test("it matches the snapshot", () => {
      const { container } = render(
        <BrowserRouter>
          <Dropdown anchor={<div>anchor</div>}>test</Dropdown>
        </BrowserRouter>,
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
