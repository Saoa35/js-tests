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

describe("readFile", () => {
  it("should return file data", () => {
    const fileData = parser.readFile("./samples/cart.csv");
    expect(typeof fileData).toBe("string");
  });
  it("should throw an Error, when path is empty", () => {
    expect(() => parser.parse("")).toThrow();
  });

  it("should throw an Error, when path is incorrect", () => {
    expect(() => parser.parse("random/path/file.csv")).toThrow();
  });
});

describe("validate", () => {
  it("should return an empty array, if the content is valid", () => {
    const contents = parser.readFile("./samples/cart.csv");
    const errors = parser.validate(contents);
    expect(errors.length).toBe(0);
  });
  it("should throw an Error, if the content is empty", () => {
    expect(() => parser.validate("")).toThrow();
  });

  it("should throw an Error, if the content is invalid", () => {
    const errors = parser.validate("some random content");
    expect(errors.length).toBeGreaterThan(0);
  });
});

describe("CartParser - integration test", () => {
  // Add your integration test here.
});
