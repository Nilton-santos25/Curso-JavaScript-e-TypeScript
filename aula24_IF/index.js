const { IgnorePlugin } = require("webpack");

/*
Entre 0 - 11 - Bom dia
Entre 12 - 17 - Boa tarde
Entre 18 - 23 - Boa noite
*/

const atual = new Date();
const hora = atual.getHours();
const minutos = atual.getMinutes();

console.log(`Agora são ${hora} e ${minutos} minutos`);
if (hora >= 0 && hora <= 11) {
    console.log('Bom dia!');
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde!');
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite!');
} else {
    console.log('Olá');
}

// const tenhoGrana = 0;

// if(tenhoGrana) {
//     console.log('Vou sair de casa');
// } else {
//     console.log('Não vou sair de casa')
// }