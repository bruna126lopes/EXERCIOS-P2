let valorHora = prompt("Digite o valor da sua hora:");
let horasTrabalhadas = prompt("Digite a quantidade de horas trabalhadas no mês:");

valorHora = parseFloat(valorHora);
horasTrabalhadas = parseFloat(horasTrabalhadas);

let salarioBruto = valorHora * horasTrabalhadas

let descontoIR;
if (salarioBruto <= 1500) {
    descontoIR = salarioBruto * 0.075
} else if (salarioBruto <= 2500) {
    descontoIR = salarioBruto * 0.15
} else {
    descontoIR = salarioBruto * 0.275
}

let descontoSindicato = salarioBruto * 0.03;
let fgts = salarioBruto * 0.08;

let salarioLiquido = salarioBruto - descontoIR - descontoSindicato;

alert("Salário Bruto: R$ " + salarioBruto);
alert("Desconto IR: R$ " + descontoIR)
alert("Desconto Sindicato: R$ " + descontoSindicato);
alert("FGTS (empresa deposita): R$ " + fgts);
alert("Salário Líquido: R$ " + salarioLiquido)