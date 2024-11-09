let nota1 = parseFloat(prompt("Digite a primeira nota:"));
let nota2 = parseFloat(prompt("Digite a segunda nota:"));

let media = (nota1 + nota2) / 2;

let mensagem = media === 10 ? "Aprovado com Distinção" :
               media >= 7 ? "Aprovado" : "Reprovado";

alert(mensagem);