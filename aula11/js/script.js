let numero1 = prompt('Digite um Número');
let numero2 = prompt('Digite outro Número');

numero1 = Number(numero1);
numero2 = Number(numero2);

const resultado = numero1 + numero2;

window.alert(`A Soma entre ${numero1} e ${numero2} é ${resultado.toFixed(2)}`);