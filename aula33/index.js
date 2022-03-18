const pessoa = {
    nome: 'Nilton',
    sobrenome: 'Santos',
    idade: 26,
    endereco: {
        rua: 'Jeronimo Coelho Mendonça',
        numero: 123
    }
};
//Atribuição via desestruturação
const { nome: n , sobrenome : s, idade:i, endereco: {numero} } = pessoa
console.log(n, s, i, numero);


const { nome, sobrenome, ... resto } = pessoa;
console.log(nome, resto);
// const nome = pessoa.nome;
// console.log(nome);