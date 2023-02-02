var lista = [1,2,3,4,5,6,7,8,9,10]
                        //length.conta tamanho da texto
for(var i = 0; i < lista.length; i++){
    for(var j = 1; j < lista.length; j++){
                            //+ - * % /
        let operacao = (i+1) + lista[j];
        console.log( i+1 + ` + ` + lista[j] + ` = ` + operacao);
    }
}