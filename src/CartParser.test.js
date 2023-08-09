import CartParser from "./CartParser";

let parser;

beforeEach(() => {
  parser = new CartParser();
});

describe("CartParser - unit tests", () => {
  // Add your unit tests here.
  describe("parse", () => {
    it("should return an object with items and total price", () => {
      const result = parser.parse("./samples/cart.csv");
      expect(result).toHaveProperty("items");
      expect(result).toHaveProperty("total");
    });

    it("should throw an Error, if the invalid file was passed", () => {
      expect(() => parser.parse("./samples/cart.json")).toThrow();
    });
  });
});

describe("CartParser - integration test", () => {
  // Add your integration test here.
});
