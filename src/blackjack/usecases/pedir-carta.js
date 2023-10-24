
/**
 * Esta funcion de permite pedir una carta
 * @param {Array<String>} deck  Es un arreglo de string
 * @returns {String}  Retorna la carta del deck
 */

export const pedirCarta = (deck) => {
    if(!deck) throw new Error('El deck de cartas es necesario');

    if (deck.length === 0) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}