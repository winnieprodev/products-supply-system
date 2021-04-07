import { render } from "@testing-library/react";
import { WrapperMode } from "models";
import { BrowserRouter } from "react-router-dom";
import { mockError } from "utils";

import ErrorHandler from "../ErrorHandler";

describe("ErrorHandler", () => {
  describe("Snapshot tests", () => {
    test("it matches the snapshot", () => {
      const { container } = render(
        <ErrorHandler error={mockError("message")} />,
      );
      expect(container.firstChild).toMatchSnapshot();
    });
    test("it matches the snapshot for mode tiny", () => {
      const { container } = render(
        <BrowserRouter>
          <ErrorHandler error={mockError("message")} mode={WrapperMode.tiny} />
        </BrowserRouter>,
      );
      expect(container.firstChild).toMatchSnapshot();
    });
    test("it matches the snapshot for mode singleLine", () => {
      const { container } = render(
        <ErrorHandler
          error={mockError("message")}
          mode={WrapperMode.singleLine}
        />,
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
