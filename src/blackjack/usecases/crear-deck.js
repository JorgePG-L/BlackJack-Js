import _ from "underscore";

/**
 * Esta funcion crea un nuevo deck
 * @param {array <string>} tiposDeCarta 
 * @param {array <string>} tiposEspeciales 
 * @returns {array}
 */

const crearDeck = (tiposDeCarta,tiposEspeciales) => {
    if ( !tiposDeCarta || tiposDeCarta === 0 ) throw new Error('TiposDecarta es obligatorio como un arreglo de string')
    
    let deck = [];
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    
    return deck;
}
export default crearDeck;