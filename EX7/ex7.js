let numero1 = parseFloat(prompt("Digite o primeiro número:"));
let numero2 = parseFloat(prompt("Digite o segundo número:"));
let numero3 = parseFloat(prompt("Digite o terceiro número:"));

let maior = (numero1 >= numero2 && numero1 >= numero3) ? numero1 :
            (numero2 >= numero1 && numero2 >= numero3) ? numero2 : numero3;

let menor = (numero1 <= numero2 && numero1 <= numero3) ? numero1 :
            (numero2 <= numero1 && numero2 <= numero3) ? numero2 : numero3;

alert("O maior número é: " + maior + "\nO menor número é: " + menor);