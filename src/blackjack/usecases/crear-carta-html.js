/**
 * 
 * @param {String} carta 
 * @returns {HTMLImageElement}
 */

export const crearCartaHtml = (carta) =>{
    if(!carta) throw new Error('la carta es un documento obligatorio')

        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`; //3H, JD
        imgCarta.classList.add('carta');

        return imgCarta;

}