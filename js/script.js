// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.ç

//prendiamo il btn del html
const btn = document.querySelector('#btn');

//creo l'evento listener per il btn
btn.addEventListener('click', function() {
    //Creo la griglia per i numeri
    const mainGrid = document.querySelector('#grid');
    for (let i = 1; i <= 100; i++){
        const newSquare = generateSquare(i);
        //aggiungo square allla griglia
        mainGrid.appendChild(newSquare);
    }
});