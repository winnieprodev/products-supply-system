import { render } from "@testing-library/react";
import { mockOrder } from "utils";
import { OrderState } from "models";

import OrderList from "../OrderList";

describe("OrderList", () => {
  describe("Snapshot tests", () => {
    test("it matches the snapshot for basic use", () => {
      const { container } = render(
        <OrderList
          items={[
            mockOrder(
              "order1",
              "15/03/2021",
              OrderState.EXPECTED,
              "18/03/2021",
            ),
          ]}
        />,
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
