//Este código cria uma caixa de diálogo que aparecerá toda vez que a págiuna for carregada, contendo a mensagem passada nela e um botão de OK para fechar o diálogo e enfim mostrar o conteúdo da página.
// ; é usado ao fim de cada linha de código/função do js.
alert("Bem vindo ao jogo do número secreto!");

// Criando uma varíável
//let deve ser usado antes do nome da variável
// para atribuir "valor" à variável usa-se o =
// numero secreto que eu escolhi
//let numeroSecreto = 10;

// criandoi númerio secreto aleatório
// o math.random() retorna numeros > 0 e <1, ai usamos o 810 para mover a virgula e ficarmos com um valor antes dela que não seja zero
// usamos o parseint para pegar apenas o que vem antes da virgula, e precisa add o 1 pq se não o número nunca será 10. será só entre 0 e 9
let numeroMaximo = 500;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);

  //o console.log serve para ajudar o dev a verificar se o código está funcionando como esperado, deve ser visualizado no console do inspecionar da página(f12)
    // para chamar uma variável não se deve usar as aspas, senão ela será interpretada como um texto, uma string


// Criando um prompt - o prompt é semelhante ao alert, também cria uma caixa de diálogo, mas aqui ele tem um espaço para o usuário digitar algo
let chute;

//dizer quantas vezes a pessoa chutou até acertar. começa com 1 pq ao entrar no jogo já é a primeira tentativa
let tentativas = 1;


//criando uma condição, neste caso de busca para identificar se o número que o usuário passou no prompt é igual ou não à variável numeroSecreto e, apartir disso, definir o que será exibido em seugida na tela.
//usnado o while ex: continuar exibindo o promp do jogo até o usuário acertar o numero
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute < numeroSecreto) {
         alert(`O número secreto é maior que ${chute}`);
        } else {
         alert(`O número secreto é menor do que ${chute}`);
        }
        //tentativas = tentativas + 1; pode ser subtituído pelo código abaixo
        tentativas++;
     } 
} 

/* colocando para aparecer na tela queo usuário vê
         alert("Isso ai! Você descobriu o número secreto 5!");
          fazendo o alerta ler a variável, para que ele atualize automaticamente o número secreto que exibe na mensagem.
         método chamado TEMPLATE STRINGS, usa-se a crase no lugar das aspas
         depois usa-se ${variavel}, para chamar a variável */

// fazendo um if para reconhecer se o numero de tentatifa for apenas 1, usar a frase no singular
/*if (tentativas > 1) {
  alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas!`);
} else {
  alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa!`);
}*/

// escrevendo o mesmo código acima para o problema da palavra tentativa, unsando um OPERADOR TERNÁRIO
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
//lê-se: o número de tentativas é maior que 1? se sim escreva TENTATIVAS, se não, TENTATIVA.
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}!`);

