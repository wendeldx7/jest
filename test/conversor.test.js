const Converter = require("../index");

test("converte Celsius em Fahrenheit", () => {
  expect(Converter(100)).toBe((212));
});
