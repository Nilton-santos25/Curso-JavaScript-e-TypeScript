//Não podemos criar Constantes com palavras reservadas
//Constantes precisam ter nomes significativos
//Não pode começar o nome de uma Constantes com número
//Não podem conter espaços ou traços
//ultiliza camelCase
//case-sensitive
//Não podemos modificar o valor de uma Constante
//não ultilizar VAR, ultilizar CONST

const primeiroNumero = '5';
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;
console.log(resultadoTriplicado)

console.log(typeof (primeiroNumero + segundoNumero))