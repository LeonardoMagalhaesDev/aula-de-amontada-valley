console.log(`Estutura de condicional`);
//if (condição){resultado}else{resultado2}

var a = 10;
var b = 5;

if(a > b){
    let soma = a + b;
    console.log(a + ` + ` + b + ` = ` + soma);
}else{
    let subtrai = a - b;
    console.log(a + ` - ` + b + ` = ` + subtrai);
}

console.log(`Estutura de repetiçao`);
//for (iniciaçao; condição; expressão final){resultado}

for(var i = 0; i <= b; i++){
    console.log(i)
    i++;// para ser par ou impar
}

console.log(`Estutura de iniciação while`);
//while(consdiçao){resultado imprime a iniciação}

var lista = new Array(
    `a`,`e`,`i`
);
var frase = `a casa da maria é azul`;
var contador = 0;
var j = 0;
while(j < frase.length){//length.conta tamanho da texto
    if(lista[0] == frase[j]){
        contador++;
    }
    j++
}
console.log(`Contando minhas letras "a" ${contador}`);


var j = 1;
while(j <= a){
    console.log(j);
    j++;
}


var validade = true;
var x = 0;
let h = 0;
while(validade){
    
    if(x == 100){
        var validade = false;
    }
    console.log(x);
    x++;
    console.log(`o H é igual a : ${h}`);
    h++;
}