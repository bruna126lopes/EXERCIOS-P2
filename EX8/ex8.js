let preco1 = parseFloat(prompt("Digite o preço do primeiro produto:"));
let preco2 = parseFloat(prompt("Digite o preço do segundo produto:"));
let preco3 = parseFloat(prompt("Digite o preço do terceiro produto:"));

let menorPreco = preco1;

if (preco2 < menorPreco) {
  menorPreco = preco2;
}

if (preco3 < menorPreco) {
  menorPreco = preco3;
}

alert("O produto mais barato custa: R$ " + menorPreco);