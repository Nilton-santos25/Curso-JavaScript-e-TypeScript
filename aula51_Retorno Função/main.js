// return
// retorna um valor
// termina a função

function soma(a, b) {
    return a + b
}
console.log(soma(1, 8));


console.log('================');

function criaPessoa(nome, sobrenome) {
    return { nome, sobrenome };
}

const p1 = criaPessoa('maria', 'Silva');
const p2 = { nome: 'João', sobrenome: 'Oliveira'};

console.log(p1);
console.log(p2);


console.log('================');

function criaMultiplicador(multiplicador) {
    //mupltiplicador
    return function(numero){
        return numero * multiplicador
    }
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadiplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2))
console.log(quadiplica(2));