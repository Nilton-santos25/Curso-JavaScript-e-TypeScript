//FOR IN -> LÊ OS ÍNDICES OU CHAVES DO OBJETO

const pessoa = {
    nome: 'Nilton',
    sobrenome: 'Santos',
    idade: 26
};

// console.log(pessoa.nome);
// console.log(pessoa['nome']);

for (let chave in pessoa) {
    console.log(chave, pessoa[chave])
}

// const frutas = ['Maçã', 'Pera', 'Uva'];

// for( let i in frutas) {
//     console.log(frutas[i])
// }

// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i])
// }


