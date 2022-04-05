// For clássico  - Geralmente com iteráveis (arrays ou strings)
// For in - Retorna o indíce ou chave (string, array, ou objetos)
// For of - Retorna o valor em si (iterávis, arrays ou strings)

//             0        1           2              
const nomes = ['maria', 'Nilton', 'Julia'];

for(let i = 0; i< nomes.length; i++) {
    console.log(nomes[i]);
}

console.log('----------------------')

for(let i in nomes) {
    console.log(nomes[i]);
}

console.log('----------------------')

for(let valor of nomes) {
    console.log(valor);
}

console.log('----------------------')

nomes.forEach(function(valor, indice, array) {
    console.log(valor, indice, array)
})

