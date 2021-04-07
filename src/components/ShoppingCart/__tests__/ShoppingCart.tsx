import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { mockAsync } from "utils";

import ShoppingCart from "../ShoppingCart";
import ShoppingCartWrapper from "../ShoppingCartWrapper";

jest.mock("@apollo/client", () => ({
  gql: (req: string) => req,
  useMutation: () => [jest.fn(), mockAsync(undefined, true)],
}));

describe("ShoppingCart", () => {
  describe("Snapshot tests", () => {
    test("it matches the snapshot", () => {
      const { container } = render(
        <BrowserRouter>
          <ShoppingCartWrapper>
            <ShoppingCart />
          </ShoppingCartWrapper>
        </BrowserRouter>,
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
