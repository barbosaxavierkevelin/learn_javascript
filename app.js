//Este código cria uma caixa de diálogo que aparecerá toda vez que a págiuna for carregada, contendo a mensagem passada nela e um botão de OK para fechar o diálogo e enfim mostrar o conteúdo da página.
// ; é usado ao fim de cada linha de código/função do js.
alert("Bem vindo ao jogo do número secreto!");

// Criando uma varíável
//let deve ser usado antes do nome da variável
// para atribuir "valor" à variável usa-se o =
let numeroSecreto = 5;

// Criando um prompt - o prompt é semelhante ao alert, também cria uma caixa de diálogo, mas aqui ele tem um espaço para o usuário digitar algo
let chute = prompt("Escolha um número entre 1 e 10");

//criando uma condição, neste caso de busca para identificar se o número que o usuário passou no prompt é igual ou não à variável numeroSecreto e, apartir disso, definir o que será exibido em seugida na tela.
if (chute == numeroSecreto) {
    //o console.log serve para ajudar o dev a verificar se o código está funcionando como esperado, deve ser visualizado no console do inspecionar da página(f12)
    console.log("Isso ai! Você descobriu o número secreto 5!");
}

function essaPalavraEUmPalindromo () {
    var palavra = "rever";
    var separandoAsLetrasaPalavra = palavra.split("");
    var palavraInvertida = separandoAsLetrasaPalavra.reverse();
    palavraInvertida = palavraInvertida.join("");
        if (palavra == palavraInvertida) {
            console.log("A palavra" + palavra + "é um palíndromo!");
        } else {
            console.log("A palavra" + palavra + "não é um palíndromo!");
        }
    }