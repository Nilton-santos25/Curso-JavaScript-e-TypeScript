//                   0          1       2    
//                0  1  2    0  1  2   0  1  2  
const numeros = [[1, 2, 3], [4, 5, 6],[7, 8, 9] ];
console.log(numeros[1][2]); //acessando indice 1 posição 2

const [lista1, lista2, lista3] = numeros;
console.log(lista3[2]);

// //                 0    1     2     3     4     5     6     7      8    //indices
// const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
// const [um, dois, tres, ...resto] = numeros; //pegando o item do array numero segundo os indices
// console.log(um, dois, tres);

// //...rest , ...spread
// console.log(resto); //pegando o resto do array com o operador rest