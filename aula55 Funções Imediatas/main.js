// IIFE -> Imediately invoked function expression
(function(idade, peso, altura) {

    const sobrenome = 'Santos';
    function criaNome(nome) {
        return nome + ' '+ sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Nilton'))
    }

    falaNome();
    console.log(idade, peso, altura);
})(26, 70, 1.76);


