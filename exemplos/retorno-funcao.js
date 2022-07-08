"use strict";
function somarValores(input1, input2) {
    if (typeof input1 == 'string' || typeof input2 == 'string') {
        return input1.toString() + input2.toString();
    }
    else {
        return input1 + input2;
    }
}
console.log(somarValores(1, 5));
console.log(somarValores('Olá ', 'mundo'));
console.log(somarValores('1', 3));
//definindo o tipo do retorno da funcao
function somarValoresNumericos(numero1, numero2) {
    return numero1 + numero2;
}
console.log(somarValoresNumericos('1', 1)); //erro, pois a funcao soh pode retornar numeros
