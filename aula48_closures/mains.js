//Global
function retornaFuncao(nome) {
    return function () {
        return nome;
    }
}
const funcao = retornaFuncao('Nilton');
const funcao2 = retornaFuncao('Amanda');

console.log(funcao(), funcao2());


