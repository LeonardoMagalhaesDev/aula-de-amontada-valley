//nome = prompt("qual é seu nome");

//alert("Seja bem vindo a aula 14.11 " + nome);

//numero01 = prompt("Informe o primeiro numero!");
//numero02 = prompt("Informe o segundo numero!");

//soma = Number(numero01) + Number(numero02);

//alert("A soma dos dois numero é " + soma);

//Variáveis
//var - transforma variavel em Global --> Classifica a variavel como Mutavel --> Pode ser utilizado em qualquer linha do código

//let - transforma variavel em Local --> Classifica a variavel como Mutavel --> Pode ser utilizado dentro  de Funçoes e Classes

//const - transforma variavel em Local --> Classifica a variavel como Imutavel --> Pode ser utilizado dentro de funções  e Classes --> Deveser utilizada para criar Tuplas

//var nome = prompt("Qual seu nome?");

//alert("Seja bem Vindo "+ nome);

//+ tem duas funções: somar e concatenar

//body é document
//document.write("<h1>Seja bem vindo novamente " + nome + "</h1>");

//document.write("<img src='https://i0.wp.com/frontendgirl.com/wp-content/uploads/2020/02/js-icon.jpg?ssl=1'>");


var area = document.getElementById("area");

function entrar(){
    var nome = prompt("Qual seu nome?");
    area.innerHTML = "Que bom que você chegou " + nome;
}