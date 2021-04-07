import { render } from "@testing-library/react";

import Grid from "../Grid";

describe("Grid", () => {
  describe("Snapshot tests", () => {
    test("it matches the snapshot for basic use", () => {
      const { container } = render(
        <Grid>
          <div>item</div>
          <div>item</div>
        </Grid>,
      );
      expect(container).toMatchSnapshot();
    });
    test("it matches the snapshot with props", () => {
      const { container } = render(
        <Grid centered>
          <div>item</div>
          <div>item</div>
        </Grid>,
      );
      expect(container).toMatchSnapshot();
    });
  });
});
