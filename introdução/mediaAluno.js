// fazer uma função para calcular media de  3 notas para bimestre
// diga se ele passou ou reprovou
// dizer se a nota esta verde ou vermelha
// uma lista com 5 alunos com nome, nota e idade
// retorne o aluno com maior nota e menor nota
// o mais novo e o mais velho

console.log("Calculadora de Média de Alunos");

function calcularMedia(nota1, nota2, nota3) {
    var nota1 = prompt("Digite a primeira nota:");
    var nota2 = prompt("Digite a segunda nota:");
    var nota3 = prompt("Digite a terceira nota:");
    const media = (nota1 + nota2 + nota3) / 3;
    return media;
   
    
}
