// function meuEscopo() {
//     const form = window.document.querySelector('.formulario');
//     const resultado = form.querySelector('.resultado');

//     function getDate() {
//         const atual = new Date();

//         const data = atual.getDay();
//         const dia = getToday(atual.getDay());
//         const mes = getMonthToday(atual.getMonth());
//         const ano = atual.getFullYear();
//         const horas = atual.getHours();
//         const minutos = atual.getMinutes();

//         resultado.innerHTML = `<p><h1>${dia}, ${zeroAEsquerda(data)} de ${mes} de ${ano} ${horas}:${minutos} </p></h1>`;
//     }
//     getDate()

//     function zeroAEsquerda(num) {
//         return num >= 10 ? num : `0${num}`;
//     }

//     function getToday() {
//         const day = new Date();
//         const today = day.getDay();

//         let diaSemana;
//         switch (today) {
//             case 0:
//                 diaSemana = 'Domingo';
//                 return diaSemana;
//             case 1:
//                 diaSemana = 'Segunda-Feira';
//                 return diaSemana;
//             case 2:
//                 diaSemana = 'Terça-Feira';
//                 return diaSemana;
//             case 3:
//                 diaSemana = 'Quarta-Feira';
//                 return diaSemana;
//             case 4:
//                 diaSemana = 'Quinta-Feira';
//                 return diaSemana;
//             case 5:
//                 diaSemana = 'Sexta-Feira';
//                 return diaSemana;
//             case 6:
//                 diaSemana = 'Sábado';
//                 return diaSemana;
//             default:
//                 diaSemana = 'Mês não existe !!!';
//                 return diaSemana;
//         }
//     }
//     getToday()

//     function getMonthToday() {
//         const mounth = new Date();
//         const mes = mounth.getMonth();

//         let mesAno;
//         switch (mes) {
//             case 0:
//                 mesAno = 'Janeiro';
//                 return mesAno;
//             case 1:
//                 mesAno = 'Fevereiro';
//                 return mesAno;
//             case 2:
//                 mesAno = 'Março';
//                 return mesAno;
//             case 3:
//                 mesAno = 'Abril';
//                 return mesAno;
//             case 4:
//                 mesAno = 'Maio';
//                 return mesAno;
//             case 5:
//                 mesAno = 'Junho';
//                 return mesAno;
//             case 6:
//                 mesAno = 'Julho';
//                 return mesAno;
//             case 7:
//                 mesAno = 'Agosto';
//                 return mesAno;
//             case 8:
//                 mesAno = 'Setembro';
//                 return mesAno;
//             case 9:
//                 mesAno = 'Outubro';
//                 return mesAno;
//             case 10:
//                 mesAno = 'Novembro';
//                 return mesAno;
//             case 11:
//                 mesAno = 'Dezembro';
//                 return mesAno;
//             default:
//                 mesAno = 'Mês não existe !!!!';
//                 return mesAno;
//         }

//     }
//     getMonthToday()
// }
// meuEscopo()

// //maneira de resolver o mesmo código de acordo com a documentação MDN
// const form = window.document.querySelector('.formulario');
// const resultado = form.querySelector('.resultado');
// const data = new Date();
// const opcoes = {
//     dateStyle: 'full',
//     timeStyle: 'short'
// };

// resultado.innerHTML = data.toLocaleDateString('pt-BR', opcoes);