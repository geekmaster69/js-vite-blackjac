import _ from 'underscore';


/**
 * 
 * @param {Array<String>} tiposDeCarta ejemplo ['C', 'D', 'H', 'S']
 * @param {Array<String>} tiposEspaciales ejemplo ['A', 'J', 'Q', 'K'];
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */

export const crearDeck = (tiposDeCarta, tiposEspaciales) => {
    if (!tiposDeCarta) throw new Error('Tipos de carta es obligatorio');

    if (!tiposEspaciales) throw new Error('Tipos de carta es obligatorio');

    let deck = [];
    for (let i = 2; i <= 10; i++) {
        for (const tipo of tiposDeCarta) {
            deck.push(i + tipo)
        }
    }

    for (let tipo of tiposDeCarta) {
        for (let esp of tiposEspaciales) {
            deck.push(esp + tipo)
        }
    }
    deck = _.shuffle(deck);

    return deck;
}


