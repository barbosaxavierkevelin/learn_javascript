/* USANDO JAVASCRIPT PARA MANIPULAR COISAS DINÂNIMCAS NO HTML */

/*Ideal colocar no html só as partes mais engessadas da aplicação, aquelas coisas que não vao ficar mudando, e no javascript solocara as coisas que devem ser mais dinâmicas.*/

/*os arquivos devem estar no mesmo diretório. e o arquivo app.js deve estar sendo chamdo no final do html : <script src="app.js" defer></script> */

//CHAMANDO O ELEMENTO COM O NÚMERO ALEATÓRIO
let numeroSecreto = gerarNumeroAleatorio();

/*indicando qual elemento do html quero alterar no js: */
/*tag h1 */
/*let titulo = document.querySelector('h1');
titulo.innerHTML = "Jogo do número secreto";*

/**tag p */
/*let paragrafo = document.querySelector('p');
paragrafo.innerHTML = "Escolha um número de 1 a 10";*/

/**tornar o código mais limpo e menos repetitivo é uma boa práfica em programação, por isso, vamos rasterizar isso aqui! */
/**podemos criar uma função com a estrutura básica do que queremos fazer, por exemplo, o que foi feito para as tags h1 e p, de forma que não precise sempre reescrever essas linhas por completo para cada nova tag que eu quiser alterar */

/**UMA BOA PRÁTICA PARA NOME DE FUNÇÃO É: A PRIMEIRA PALAVRA TODA EM MINÚSCULA E AS DEMAIS COM A PRIMEIRA LETRA MAIÚSCULA, EX: funcaoExemplo */

function exibirTextoNaTela(tag, texto) { //dentro da função devo indicar as variáveis
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

//chamando a função - ai aqui, toda vez que quiser usar a função apra um elemento novo, basta passar os valores das variáveis, semprecisar reescrever todo o código repetidamente
//exibirTextoNaTela(tag, texto)//
exibirTextoNaTela('h1', "Jogo do número secreto");
exibirTextoNaTela('p', 'Escolha um número de 1 a 10');


/**CRIANDO FUNÇÕES */
/**Ela deve ter o mesmo nome no js e no html */
// linkar o imput do usuário com o valor aleatório gerado
function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto)
}

// FUNÇÃO PARA GERAR O NÚMERO ALEATÓRIO
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

