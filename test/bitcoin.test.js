const ConverterBitcoin = require("../index");

test("converte Bitcoin em Real", () => {
  expect(ConverterBitcoin(1)).toBe(303.500);
});
