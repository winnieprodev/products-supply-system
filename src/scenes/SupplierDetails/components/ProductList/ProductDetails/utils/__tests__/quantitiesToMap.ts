import { QuantityType } from "models";
import { quantitiesToMap } from "../quantitiesToMap";

describe("ProductDetails: utils", () => {
  describe("quantitiesToMap", () => {
    test("return proper value", () => {
      expect(quantitiesToMap([]).toJS()).toMatchSnapshot();
      expect(
        quantitiesToMap([
          { type: QuantityType.WHOLE, amount: 3 },
          { type: QuantityType.LOOSE, amount: 1 },
        ]).toJS(),
      ).toMatchSnapshot();
    });
  });
});
