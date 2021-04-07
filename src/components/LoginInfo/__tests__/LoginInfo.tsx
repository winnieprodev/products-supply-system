import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import LoginBox from "../LoginInfo";

describe("LoginBox", () => {
  describe("Snapshot tests", () => {
    test("it matches the snapshot", () => {
      const { container } = render(
        <BrowserRouter>
          <LoginBox />
        </BrowserRouter>,
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
