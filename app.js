const {generarNumeroAleatorio, verificarAdivinanza} = require('./adivinanza');
const readlineSync = require('readline-sync');

const solicitarNumero = () =>{
    return readlineSync.question(' Ingresa un numero:  ');
}

const jugarAdivinanza = () =>{
    let numeroSecreto = generarNumeroAleatorio();
    let numeroAdivinado = 0; 

    console.log(' Bienvenido al juego de adivinar el numero secreto ');
    console.log(' Intenta adivinar el numero entre el 1 y el 100 ');
   

    while(numeroAdivinado !== numeroSecreto){
        numeroAdivinado = solicitarNumero();
        verificarAdivinanza(numeroSecreto, numeroAdivinado);
    }
}
/*
    while (true) {
        numeroAdivinado = solicitarNumero();
        const resultado = verificarAdivinanza(numeroSecreto, numeroAdivinado);

        if (resultado === 'adivinado') {
            console.log('¡Felicidades! ¡Has adivinado el número secreto!');
            break;
        } else if (resultado === 'menor') {
            console.log('El número secreto es menor.');
        } else {
            console.log('El número secreto es mayor.');
        }
    }
*/


jugarAdivinanza();