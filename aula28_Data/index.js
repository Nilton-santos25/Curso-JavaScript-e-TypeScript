// const tresHoras = 60 * 60 * 3 * 1000;
// const data = new Date(2022, 3, 20, 15, 14, 27, 500); // ano, mês, dia, hora, min, seg, miles.
// console.log(data.toDateString());
// console.log(data.toString());
const data = new Date('2019-04-20 20:20:59');
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth()); //Mês começa em zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Minutos', data.getMinutes());
console.log('Segundos', data.getSeconds());
console.log('Milessegundos', data.getMilliseconds());
console.log('Dia da Semana', data.getDay()); // 0 - Domingo, 6 - Sábado
console.log(data.toString());
//console.log(Date.now());

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`; //numero maior que 10 retorna o própio num, se não retorna o 0 a esquerda
}

function formataData(dataAtual) {
    const dia = zeroAEsquerda(dataAtual.getDate());
    const mes = zeroAEsquerda(dataAtual.getMonth() + 1);
    const ano = zeroAEsquerda(dataAtual.getFullYear());
    const hora = zeroAEsquerda(dataAtual.getHours());
    const min = zeroAEsquerda(dataAtual.getMinutes());
    const seg = zeroAEsquerda(dataAtual.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const dataAtual = new Date();
const dataBrasil = formataData(dataAtual);
console.log(dataBrasil);