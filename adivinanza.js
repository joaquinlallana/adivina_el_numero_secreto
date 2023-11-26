const generarNumeroAleatorio = () =>{
    return Math.floor(Math.random() * 100) + 1;
};

const verificarAdivinanza = (numeroSecreto, numeroAdivinado) =>{
    if(numeroSecreto == numeroAdivinado){
        console.log(' Felicitaciones, ha advinado el numero!!! ');
    }
    else if (numeroAdivinado > numeroSecreto){
        console.log(' El numero secreto es mas pequeño... sigue intentando ');
    }
    else{
        console.log(' El numero secreto es mas grande... sigue intentando ');
    }
}

/*
const verificarAdivinanza = (numeroSecreto, numeroAdivinado) => {
    if (numeroSecreto == numeroAdivinado) {
        return 'adivinado';
    } else if (numeroAdivinado > numeroSecreto) {
        return 'menor';
    } else {
        return 'mayor';
    }
};
*/

module.exports = {
    generarNumeroAleatorio,
    verificarAdivinanza
};