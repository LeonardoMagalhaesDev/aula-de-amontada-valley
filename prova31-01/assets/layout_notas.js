

function mostrar(meu) {
    document.write(meu);
}

var urlParametros = new URLSearchParams(window.location.search);
var nomeRecebido = urlParametros.get("nome");
var nota01Recebido = parseInt(urlParametros.get("nota01"));
var nota02Recebido = parseInt(urlParametros.get("nota02")); 
var soma = (nota01Recebido + nota02Recebido) / 2;

var inputResultado = document.getElementById("resultado");
inputResultado.value = soma;

if (soma >= 7) {
    var msg = `Aluno ${nomeRecebido} conquistou a media ${soma} esta Aprovado!!`
    document.querySelector("#resultado").innerHTML = msg
}else{
    var msg = `Aluno ${nomeRecebido} conquistou a media ${soma} esta Recuperação!!`
    document.querySelector("#resultado").innerHTML = msg
}

mostrar(`Resultado Aqui:${soma}`);
