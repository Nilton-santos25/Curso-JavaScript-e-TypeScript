const paragrafos = document.querySelector('.paragrafos');
const pegaParagrafos = paragrafos.querySelectorAll('p') //pega todos os paragrafos que estão na class paragrafos

//pegando os estilos do body
const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody);

for (let p of pegaParagrafos) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#FFF'
}