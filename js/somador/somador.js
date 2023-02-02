function soma() {
    var parcela = parseInt( document.form_soma.parcela.value);
    var parcela02 = parseInt( document.form_soma.parcela02.value);
    var resultado = (parcela + parcela02);
    var elemento = document.getElementById('diferenca');
    elemento.style.backgroundColor = 'red';
    elemento.style.color = 'white';
    return document.querySelector("[name='resultado']").value = resultado;
}

function subitrair() {
    var parcelaa = parseInt( document.form_subitrair.parcelaa.value);
    var parcelaa02 = parseInt( document.form_subitrair.parcelaa02.value);
    var resultado1 = (parcelaa - parcelaa02);
    return document.querySelector("[name='resultado1']").value = resultado1;
}

function multiplicar() {
    var parcellaa = parseInt( document.form_multiplicar.parcellaa.value);
    var parcellaa02 = parseInt( document.form_multiplicar.parcellaa02.value);
    var resultado2 = (parcellaa * parcellaa02);
    return document.querySelector("[name='resultado2']").value = resultado2;
}

function divisao() {
    var parceellaa = parseInt( document.form_divisao.parceellaa.value);
    var parceellaa02 = parseInt( document.form_divisao.parceellaa02.value);
    var resultado3 = (parceellaa / parceellaa02);
    return document.querySelector("[name='resultado3']").value = resultado3;
}