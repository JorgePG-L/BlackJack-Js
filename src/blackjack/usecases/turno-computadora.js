import {pedirCarta,valorCarta,crearCarta} from "./";

const turnoComputadora = ( puntosMinimos, puntosHTML,divCartasComputadora, deck = [] ) => {
        if (!puntosMinimos) throw new Error ('puntos minimos son necesarios')
        if (!puntosHTML) throw new Error ('El puntosHTML es necesario')
        let puntosComputadora = 0;
    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHTML.innerText = puntosComputadora;
        
        const imgCarta = crearCarta( carta );
        divCartasComputadora.append( imgCarta );
        

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );
    
    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}

export default turnoComputadora;