//Chiedo all'utente un numero e genero attraverso una funzione un numero di quadrati equivalente 
//al numero inserito dall'utente nel DOM, in qualsiasi forma. 

//creo un prompt per chiedere all'utente un numero e poi lo genero.

    const chiediNumero = parseInt(prompt('inserisci un numero'));
    console.log(chiediNumero);

//nella console funziona nella richiesta dell'utente.

//inserire una function per generare un numero 

function generateSquare(){
    //creiamo un elemento div
    const divElement = document.createElement('div';)
    //assegniamo delle classi al div
    divElement.classList.add('square');
    //popoliamo il div

    //return il div appena creato
    return divElement;
}