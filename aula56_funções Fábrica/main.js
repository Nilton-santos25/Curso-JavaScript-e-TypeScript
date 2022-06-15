//FACTORY FUNCTION (Função fábrica)
// CONSTRUCTOR FUNCTION (Função construtora)
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,

        // Geter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        //Seter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);
        },

        fala(assunto) {
            return `${nome} está ${assunto}`
        },
        altura,
        peso,
        imc() {
            const indice = (this.peso / this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Jurema', 'Da Silva', 1.80, 120);
p1.nomeCompleto = 'Maria Oliveira Silva';
console.log(p1.nome);
console.log(p1.sobrenome);
//console.log(p1.nomeCompleto());
//console.log(p1.fala('falando fofocas das bravas'));
//console.log(p1.imc());

console.log('===========||=============');

const p2 = criaPessoa('Maria', 'Das dores', 1.60, 99);
console.log(p2.fala('falando fofocas das bravas'));
console.log(p2.imc());