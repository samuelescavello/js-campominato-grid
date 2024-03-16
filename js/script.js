/* <article class="square"></article> */

// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di 
// azzurro ed emetto un messaggio in console con il numero della cella cliccata.

function genSquare(cont){
    let newEl = document.createElement('article');
    newEl.innerHTML = '<span>' + cont + '</span>'
    newEl.classList.add('square');
    return newEl;
}

let gridEl = document.getElementById('grid')

for (let i = 0 ; i < 100 ; i++){

    let newSquare = genSquare(i + 1);

    newSquare.addEventListener('click' , function(){
        newSquare.classList.add('clicked')
    });

    gridEl.appendChild(newSquare);
}
