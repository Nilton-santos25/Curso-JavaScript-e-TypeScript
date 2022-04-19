function retornaHora(data) {
    if (data && !(data instanceof Date)) { //se a data for enviada e não for uma instância de Date
        throw new TypeError('Eseperando instância de Date...');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });

}

try {
    //const data = new Date('01-01-1970 12:58:55');
    const hora = retornaHora();
    console.log(hora);
} catch (e) {
    // Tratar erro
    //concole.log(e)
} finally {
    console.log('Tenha um bom dia');
}



// try {
//  // É executada quando não há erros
// } catch {
// // É executada quando há erros    
// } finally {
// // Sempre é executada
// }