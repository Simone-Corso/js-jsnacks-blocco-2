//Generatore di "nomi cognomi" casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi, e da questi due array distinti vuole generare una falsa lista di invitati con nome e cognome.


//generare una lista nome
const chiediLista = parseInt(prompt('Chiedere nome e cognome'));
const listaNome = ['gina',
                'francesco',
                'alessandro'];


//generare la lista Cognome

const listaCognome = ['matto',
                        'pazzo',
                            'bravo'];


while ( somma = listaCognome + listaNome){
    const chiediLista = parseInt(prompt('Chiedere nome e cognome'));
    if ( !NaN (chiediLista)){
        somma += chiediLista;
        array.push(false);
    }
}










/*const array = [];

let somma = 0;

while ( somma <= 50){
     const userNumber = parseInt(prompt('type a new number'));
    if ( !isNaN (userNumber)){
     somma += userNumber;
     array.push(userNumber);
}
}
