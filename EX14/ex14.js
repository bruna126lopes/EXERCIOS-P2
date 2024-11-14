let nota1 = parseFloat(prompt("Digite a Nota 1:"));
            let nota2 = parseFloat(prompt("Digite a Nota 2:"));
            
            let media = (nota1 + nota2) / 2;

            let conceito;
            let status;
            if (media >= 9.0) {
                conceito = 'A'
                status = 'APROVADO';
            } else if (media >= 7.5) {
                conceito = 'B';
                status = 'APROVADO';
            } else if (media >= 6.0) {
                conceito = 'C';
                status = 'APROVADO';
            } else if (media >= 4.0) {
                conceito = 'D';
                status = 'REPROVADO';
            } else {
                conceito = 'E'
                status = 'REPROVADO'
            }

            alert("Média: " + media + "\nConceito: " + conceito + "\nStatus: " + status);