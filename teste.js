

console.log("Olá, mundo!")

function soma(x, y) {
    console.log(x + y)
}
soma(5, 20)
soma(10, 50)



//function nomeDaFuncao(){
//o que a função faz (corpo da função)
//}

//function declaration - funciona o hoisting
essaPalavraEUmPalindromo();

function essaPalavraEUmPalindromo () {
var palavra = "treino";
var separandoAsLetrasaPalavra = palavra.split("");
var palavraInvertida = separandoAsLetrasaPalavra.reverse();
palavraInvertida = palavraInvertida.join("");
    if (palavra == palavraInvertida) {
        console.log("A palavra " + palavra + " é um palíndromo!");
    } else {
        console.log("A palavra " + palavra + " não é um palíndromo!");
    }
}

//function expression - não funciona o hoisting
//o que tiver dentro dos parencteses da function é o que eu espero de retorno da função é a variável
const essaPalavraEUmPalindromo2 = function (palavra) {
var separandoAsLetrasaPalavra = palavra.split("");
var palavraInvertida = separandoAsLetrasaPalavra.reverse();
palavraInvertida = palavraInvertida.join("");
    if (palavra == palavraInvertida) {
        console.log("A palavra " + palavra + " é um palíndromo!");
    } else {
        console.log("A palavra " + palavra + " não é um palíndromo!");
    }
}
essaPalavraEUmPalindromo2("kevelin");

//ARRAYs

//criando o array
let cores = ["amarelo", "vermelho", "azul", "preto" ]
console.log(cores)

//adicionando um elemento
cores.push("verde")
console.log(cores)

//retirando o elemento do final da lista
cores.pop()
console.log(cores)

//vendo o tamanho do array (lista)
console.log(cores.length)

//OBJETOS
//são formados por um conjunto de chave e valor
//objeto vazio
let pessoax = {}

//colocando info
let pessoa = {
    nome: "Kevelin",
    idade: 26,
    hobbies: ["DevWeb", "programar"]
}
console.log(pessoa)
