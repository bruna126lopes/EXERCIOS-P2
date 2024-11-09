let turno = prompt("Em que turno você estuda? Digite 'M' para Matutino, 'V' para Vespertino ou 'N' para Noturno:").toUpperCase();

alert(
  turno === "M" ? "Bom Dia!" :
  turno === "V" ? "Boa Tarde!" :
  turno === "N" ? "Boa Noite!" :
  "Valor Inválido!"
);