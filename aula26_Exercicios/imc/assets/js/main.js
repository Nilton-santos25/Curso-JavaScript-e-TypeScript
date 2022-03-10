const form = document.querySelector('#form'); //pegando o formulario

form.addEventListener('submit', function (evento) {
    evento.preventDefault();
    const inputPeso = evento.target.querySelector('#txt-peso');
    const inpuAltura = evento.target.querySelector('#txt-altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inpuAltura.value);

    if (!peso) { //se o peso for falso (string)
        setResultado('Peso inválido', false);
        return;
    }

    if (!altura) { //se a altura for false (String)
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc}).`;

    setResultado(msg, true);

}); //evento para não enviar o formulário

function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade Grau I', 'Obesidade Grau II', 'Obesidade Grau III'];

    if (imc >= 39.9) return nivel[5];
    
    if (imc >= 34.9) return nivel[4];
    
    if (imc >= 29.9) return nivel[3];
    
    if (imc >= 24.9) return nivel[2];
    
    if (imc >= 18.5) return nivel[1];
    
    if (imc < 18.5) return nivel[0];
    
}

    function getImc(peso, altura) {
        const imc = peso / altura ** 2;
        return imc.toFixed(2);
    }

    function criaParagrafo() {
        const p = document.createElement('p'); //criando um paragráfo com JS
        return p;
    }

    function setResultado(msg, isValid) {
        const resultado = document.querySelector('#resultado');
        resultado.innerHTML = '';
        
        const p = criaParagrafo();

        if(isValid) {
            p.classList.add('paragrafo-resultado');
        }
        else {
            p.classList.add('bad');
        }    

        p.innerHTML = msg;
        resultado.appendChild(p)
    }