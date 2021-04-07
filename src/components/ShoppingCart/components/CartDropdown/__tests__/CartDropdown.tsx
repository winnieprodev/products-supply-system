import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { mockAsync, mockCart } from "utils";

import CartDropdown from "../CartDropdown";

jest.mock("@apollo/client", () => ({
  gql: (req: string) => req,
  useQuery: () => mockAsync(undefined, true),
}));

describe("CartDropdown", () => {
  describe("Snapshot tests", () => {
    test("it matches the snapshot", () => {
      const { container } = render(
        <BrowserRouter>
          <CartDropdown cart={mockCart(1)} />
        </BrowserRouter>,
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
