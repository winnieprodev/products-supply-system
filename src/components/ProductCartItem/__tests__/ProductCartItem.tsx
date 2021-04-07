import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { mockAsync } from "utils";

import ProductCartItem from "../ProductCartItem";

jest.mock("@apollo/client", () => ({
  gql: (req: string) => req,
  useQuery: () => () => mockAsync(undefined, true),
}));

describe("ProductCartItem", () => {
  describe("Snapshot tests", () => {
    test("it matches the snapshot", () => {
      const { container } = render(
        <BrowserRouter>
          <ProductCartItem
            item={{ productId: "id", quantities: [] }}
            onRemove={jest.fn()}
          />
        </BrowserRouter>,
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
