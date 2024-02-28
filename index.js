//Converter
function Converter(celsius) {
  return celsius * 1.8 + 32;
}

module.exports = Converter;

//BitCoin
function ConverterBitcoin(bitcoin) {
  return bitcoin * 30350088;
}
module.exports = ConverterBitcoin;

//Senha
function CompareSenha(senha1, senha2) {
  if (senha1 === senha2) {
    return true;
  } else {
    return false;
  }
}
module.exports = CompareSenha;
