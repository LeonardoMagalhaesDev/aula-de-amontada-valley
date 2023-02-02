var urlParametros = new URLSearchParams(window.location.search);
var nomeRecebido = urlParametros.get("nome");
var faltasRecebido = urlParametros.get("faltas");
var nota01Recebido = parseInt(urlParametros.get("nota01"));
var nota02Recebido = parseInt(urlParametros.get("nota02")); 

var soma = (nota01Recebido + nota02Recebido) / 2;

var inputNome = document.getElementById("nome");
inputNome.value = nomeRecebido;

var inputFaltas = document.getElementById("faltas");
inputFaltas.value = faltasRecebido;

var inputNota01 = document.getElementById("nota01");
inputNota01.value = nota01Recebido;

var inputNota02 = document.getElementById("nota02");
inputNota02.value = nota02Recebido;

var inputResultado = document.getElementById("resultado");
inputResultado.value = soma;
