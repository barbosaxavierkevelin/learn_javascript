/* USANDO JAVASCRIPT PARA MANIPULAR COISAS DINÂNIMCAS NO HTML */

/*Ideal colocar no html só as partes mais engessadas da aplicação, aquelas coisas que não vao ficar mudando, e no javascript solocara as coisas que devem ser mais dinâmicas.*/

/*os arquivos devem estar no mesmo diretório. e o arquivo app.js deve estar sendo chamdo no final do html : <script src="app.js" defer></script> */

//CRIANDO UMA LISTA VAZIA, QUE IRÁ RECEBER OS NÚMEROS SORTEADOS
let listaDeNumerosSorteados = [];

// INDICANDO O LIMITE DE QUANTIDADE DE NÚMEROS ALEATÓRIOS QUE QUERO GERAR POIS ESSA VARIÁVEL SERÁ USADA NA FUNÇÃO DE GERAR NUMERO ALEATÓRIO E NA FUNÇÃO DE REINICIAR A LISTA
let numeroLimite = 10;

//CHAMANDO O ELEMENTO COM O NÚMERO ALEATÓRIO
let numeroSecreto = gerarNumeroAleatorio();

//ARMAZENANDO O NÚMERO DE TENTATIVAS
let tentativas = 1;

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
    //usando a função que le e fala os textos da tela com voz de uma mulher, em português do brasil, na velocidade 1.2
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

//chamando a função - ai aqui, toda vez que quiser usar a função apra um elemento novo, basta passar os valores das variáveis, semprecisar reescrever todo o código repetidamente
//exibirTextoNaTela(tag, texto)//
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', "Jogo do número secreto");
    exibirTextoNaTela('p', 'Escolha um número de 1 a 10');
}

exibirMensagemInicial();


/**CRIANDO FUNÇÕES */
/**Ela deve ter o mesmo nome no js e no html */
// linkar o imput do usuário com o valor aleatório gerado
function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Você acertou!');
        //o html não reconhece as template strings, então é preciso criar variáveis para armazenar as infomrações antes delas serem passadas para o html
        //plural e singular:
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        //template string que acessa o numero de tentativas:
        let mensagemTemtativas =  `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        //agora que a mensagem estará pronta, pode ser passada ao html:
        exibirTextoNaTela('p', mensagemTemtativas);
        //ativar o botão novo jogo quando eu acertar o numerosecreto
        //preciso acessar o id desse botão lá no html para habilita-lo
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (chute > numeroSecreto) {
        exibirTextoNaTela('p', 'O número secreto é MENOR!');
    } else {
        exibirTextoNaTela('p', 'O número secreto é MAIOR!');
    }
    //contando o número se tentativas:
    tentativas++;
    //chamando a função para limpar o campo de input
    limparCampo();
}

// FUNÇÃO PARA GERAR O NÚMERO ALEATÓRIO E ARMAZENA-LO NUMA VARIÁVEL, QUE SERÁ USADA PARA GUARDA-LO NA LISTA
function gerarNumeroAleatorio() {
    let numeroEscolhido =  parseInt(Math.random() * numeroLimite + 1);
    //verificando se o tamanho maximo da lista foi atingido, se sim, reinicia o processo
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    //criando a lista e retornando o valor sorteado
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}
// o includes "pergunda" se a minha listaDeNumerosSorteados contem o numeroEscolhido;
// o push indica "pegar /usar";

//função para limpar o campo de input
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

// função para gerar um novo jogo quando o novo jogo for clicadio
function reiniciarJogo() {
    //resetando os campos do jogo
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    //desabilitando inicialmente o botão novo jogo
    document.getElementById('reiniciar').setAttribute('disabled', true);
}


//LISTAS (ARRAYS)
//para criar listas usa-se [] ex:
let minhaLista = ["elemento 1", "elemento 2"]
