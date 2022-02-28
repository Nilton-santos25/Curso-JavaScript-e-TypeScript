const pessoa1 = {
    nome: 'Nilton',
    sobrenome: 'Santos',
    idade: 25,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
        console.log(`A minha idade atual é ${this.idade}`)
    },

    incrementaIdade() {
        this.idade++;
    }
}

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();pessoa1.incrementaIdade();
pessoa1.fala();





// function criaPessoa(nome, sobrenome, idade) {
//     return {
//         nome,
//         sobrenome,
//         idade
//     };
// }

// const pessoa1 = criaPessoa('Nilton', 'Santos', 25);
// const pessoa2 = criaPessoa('Maria', 'Das Graças', 58);
// const pessoa3 = criaPessoa('Rodrigo', 'Macedo', 44);
// const pessoa4 = criaPessoa('João', 'Oliveira', 84);
// const pessoa5 = criaPessoa('Jean', 'Moreira', 34);

// console.log(pessoa1.nome, pessoa2.nome);