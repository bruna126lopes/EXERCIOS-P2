let letra = prompt("Digite uma letra (F ou M):").toUpperCase();

alert(letra === "F" ? "F - Feminino" : letra === "M" ? "M - Masculino" : "Sexo Inválido");