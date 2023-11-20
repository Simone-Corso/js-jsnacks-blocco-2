//Dare la possibilità di inserire due parole. 
//Verificare tramite una funzione che le due parole abbiano la stessa lunghezza. 
//Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

//inseriamo la fuction con due parole



const primaParola = prompt ('Che tipo di parola');
const secondaParola = prompt ('che tipo di parola');

fuction lalungezzadellaParola (primaParola,secondaParola){
    if (primaParola.length === secondaParola.length){
        return true;
    } else {
        return false;
    }
}
