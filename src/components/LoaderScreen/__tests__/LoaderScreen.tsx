import { render } from "@testing-library/react";
import { WrapperMode } from "models";

import LoaderScreen from "../LoaderScreen";

describe("LoaderScreen", () => {
  describe("Snapshot tests", () => {
    test("it matches the snapshot", () => {
      const { container } = render(<LoaderScreen>test</LoaderScreen>);
      expect(container.firstChild).toMatchSnapshot();
    });
    test("it matches the snapshot for mode=singleLine", () => {
      const { container } = render(
        <LoaderScreen mode={WrapperMode.singleLine}>test</LoaderScreen>,
      );
      expect(container.firstChild).toMatchSnapshot();
    });
    test("it matches the snapshot for mode=tiny", () => {
      const { container } = render(
        <LoaderScreen mode={WrapperMode.tiny}>test</LoaderScreen>,
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
