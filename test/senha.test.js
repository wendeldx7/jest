const CompareSenha = require("../index");

test("teste de senhas", () => {
  expect(CompareSenha('wendel','2')).toBe((false));
});
