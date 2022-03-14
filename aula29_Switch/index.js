function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Hoje é Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Hoje é Segunda-Feira !';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Hoje é Terça-Feira';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Hojé é Quarta-Feira!';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Hoje é Quinta-Feira!';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Hoje é Sexta-Feira';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Hoje é Sábado!';
            return diaSemanaTexto;
        default:
            diaSemanaTexto = 'Dia não encontrado';
            return diaSemanaTexto;
    }

}

// switch (diaSemana) {
    //     case 0:
    //         diaSemanaTexto = 'Hoje é Domingo';
    //         break;
    //     case 1:
    //         diaSemanaTexto = 'Hoje é Segunda-Feira !';
    //         break;
    //     case 2:
    //         diaSemanaTexto = 'Hoje é Terça-Feira';
    //         break;
    //     case 3:
    //         diaSemanaTexto = 'Hojé é Quarta-Feira!';
    //         break;
    //     case 4:
    //         diaSemanaTexto = 'Hoje é Quinta-Feira!';
    //         break;
    //     case 5:
    //         diaSemanaTexto = 'Hoje é Sexta-Feira';
    //         break;
    //     case 6:
    //         diaSemanaTexto = 'Hoje é Sábado!';
    //         break;
    //     default:
    //         diaSemanaTexto = 'Dia não encontrado';
    // }
    
    const data = new Date('1987-04-21 00:00:00');
    const diaSemana = data.getDay();
    let diaSemanaTexto = getDiaSemanaTexto(diaSemana);
    
    console.log(diaSemana, diaSemanaTexto);