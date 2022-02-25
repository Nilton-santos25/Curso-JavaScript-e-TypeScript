const nome = 'Nilton';
const sobrenome = 'Santos';
const idade = 27;
const peso = 69;
const altura = 1.76;
let imc =  peso / (altura * altura);
let anoNascimento = 2022 - idade;

console.log(nome,sobrenome, 'tem', idade, 'anos, pesa',peso,'Kg');
console.log('tem',altura,'seu IMC é de',imc.toFixed(2),'.')
console.log(nome, 'nasceu em ',anoNascimento,'.')