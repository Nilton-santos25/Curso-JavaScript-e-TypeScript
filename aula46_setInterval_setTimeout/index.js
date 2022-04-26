function mostraHora() {
    let data = new Date()

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

setInterval(function () {
    console.log(mostraHora());
}, 1000);

setTimeout(function () {
    console.log(timer)
}, 3000);

setTimeout(function () {
    console.log('Olá mundo')
}, 5000);