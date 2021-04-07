import { generateMono } from "../supplierUtils";

describe("supplierUtils", () => {
  describe("generateMono", () => {
    test("It should return proper mono for given name", () => {
      expect(generateMono("Just For Test")).toBe("JFT");
    });
    test("It should return proper mono for name with Pte or Ltd", () => {
      expect(generateMono("Just For Test Pte LTD")).toBe("JFT");
    });
    test("It should return proper mono for name with Pte with dot", () => {
      expect(generateMono("Just For Test Pte. LTD")).toBe("JFT");
    });
    test("It should return proper mono for a name that's just too long", () => {
      expect(generateMono("Just For Test And it is not PtD")).toBe("JFT");
    });
  });
});
