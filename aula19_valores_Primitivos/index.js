/*
PRIMITIVOS (imutáveis) - String, number, boolean, undefined, null (bigint, symbol)

Referência (mutável) - array, object, function
*/

const a = { 
    nome: 'Nilton',
    sobrenome: 'Santos'
};
const b = {...a};

a.nome = 'Maria';
console.log(a);
console.log(b);

/*
VALORES POR REFERÊNCIA 

let a = [1, 2, 3];
let b = a;
let c = b;
console.log(a, b);

a.push(4);
console.log(a, b); //a e b apontam para o mesmo valor pois os dois são mutáveis

b.pop()
console.log(a, b);

console.log(c)
*/


/*
VALORES PRIMITIVOS -- IMUTÁVEIS são valores copiados

let a = 'A';
let b = a; // Cópia 
console.log(a, b);

a = 'Outra coisa';
console.log(a, b);

            012345
let nome = 'Nilton';
//nome[0] = 'j'; //não se altera porque a String e imutável, o valor que está armazenado não pode ser modificadodo
console.log(nome[0]);
*/