// IEEE 754-2008
let numero1 = 0.7;
let numero2 = 0.1;

numero1 += numero2; //0.8
numero1 += numero2; //0.9
numero1 += numero2; //1.0
numero1 += numero2; //1.1
numero1 += numero2; //1.2
numero1 += numero2; //1.3
numero1 += numero2; //1.4
numero1 += numero2; //1.5

numero1 = Number(numero1.toFixed(2));

console.log(numero1);

//console.log(numero1.toString() + numero2); //concatenação string com number
//numero1 = numero1.toString() //conversão de número em string
//console.log(numero1.toString(2)) //mostra o número em  binário
//console.log(numero1.toFixed(2)) //colocando numeros em casas decimais 
//console.log(Number.isInteger(numero1)) //verifica se o numero é inteiro
