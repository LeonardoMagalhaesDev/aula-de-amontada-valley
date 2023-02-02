function alerta() {
    alert(`Seja bem vindo ao meu site!!!`)
}

var nome; 

document.getElementById(`nome`).value = "Leonardo";

function acesso() {
    nome = prompt("Informe seu nome: ");
    var idade = prompt("Informe sua idade: ");
    var novelDeAcesso = 12;

    if (idade >= novelDeAcesso) {
        let elementoDoTexto = document.querySelector(`.altera__texto`);
        elementoDoTexto.innerHTML = `Seu acesso esta liberado ${nome.toUpperCase()}`
    }else{
        let elementoDoTexto = document.querySelector(`.altera__texto`);
        elementoDoTexto.innerHTML = `Seu acesso não esta liberado ${nome.toUpperCase()}`
    }
        
}

var nome;

function alert_restrita() {
    if (nome.toUpperCase() == 'LEONARDO') {
        let elementoDoTexto = document.querySelector('.altera__texto');
        elementoDoTexto.innerHTML = `Seu acesso esta liberado soldado ${nome.toUpperCase()}`
    }else{
        alert = ("Seu acesso esta negado pois você não é soldado" + nome.toUpperCase());
    }
}