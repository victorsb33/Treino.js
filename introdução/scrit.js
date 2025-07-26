console.log("Hello word!")
/* variáveis

    let (armazena mais de um valor na variável)
    const (armazena apenas um valor para variável)
    var 

*/
const coisa = "ola js fala ai"

console.log(coisa)

let coisa2 = "ola js eu vou vencer"

coisa2 = 1

console.log(coisa2)

/* tipos de dados

    string -texto
    number - numero
    boolean - true ou false
    object - obejeto
    null e undefined - nulo e indefinido
    array - matriz



*/
const numero = 1
const texto = `eu vou ser n ${numero}`

console.log(texto)

const usuario = {
    nome: 'victor',
    idade: 22,
    casado: true

}
console.log(usuario)

const usuario2 = {
    nome: 'joão',
    idade: 25,
    casado: false,
    conjunge: null

}
console.log(usuario2)

const array = [
    {
        nome: 'victor',
        idade: 22,
        casado: true

    },
{
        nome: 'joão',
        idade: 25,
        casado: false,
        conjunge: null

    }

]
console.log(array)

/*

    ef e else - controlador de fluxo

    ef-se
    else-senao

    operadores de comparação

    > maior que 
    < menor que
    === igual que - compara o valor e tipo.
    == igual que - compara somente o valor.
    >= maior ou igual que
    <= menor ou igual que

*/

const notaDoAluno = 10

    if(notaDoAluno >= 8){
        console.log("Aluno Aprovado")
    } else {
        console.log("Aluno Reprovado")
    }

const cidade = 300000

    if(cidade >= 300000){
        console.log("cidade grande")
    } else {
        console.log("cidade pequena")
    }

/*
 functions - função

    função - void (vazia)
    função - parametros
    função - return
    função - arrow
*/

    function digaMeuNome(){
        console.log("victorS")
    }
    digaMeuNome()

    function soma(numero1, numero2){
        const resultado = numero1 + numero2
        console.log(resultado)

    }
    soma(5,6)

    function estaEndividado(gasto, receita) {
        if (receita > gasto) {
            return 'esta verde'
        } else {
            return 'esta vermelho'
        }
    }
    const maria = estaEndividado(3000, 5000)
    const joao = estaEndividado(9000,5000)
 
    console.log(maria)
    console.log(joao)

    /*    arrow function    */

    const digaMeuNome2 = () => {    // forma moderna //
        console.log ("victor")
    }
    digaMeuNome2()

        /*
            mach-matématica
                pow(2,2) / potência
                sqrt(25,2) / raiz
                ceil - teto / arredondar pra cima
                floor - chão / arrendondar pra baixo
                random - aleatorio
        */

    const calculo = Math.random() * (100 - 1) + 1;
    console.log(Math.ceil(calculo))

