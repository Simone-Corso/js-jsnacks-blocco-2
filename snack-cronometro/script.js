//Cliccando su un pulsante, viene avviato un cronometro. Per fermare il cronometro, bisogna cliccare su un secondo pulsante

const clock = setInterval(myFunction, 10000);
console.log(clock)

function myFunction(){
    alert('il tempo registrato è');
}

clearInterval(clock);

