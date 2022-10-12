
const button = document.getElementById('tiraidadi')


const numerodidadi = 1;
let numerorisultato = 0;
let numerorisultato2 = 0;
let numerorisultato3 = 0;
let numerorisultato4 = 0;

const fx = function() {
    
for ( let i = 1; i <= numerodidadi; i++){
    numerorisultato = Math.floor(Math.random() * (7 - 1) ) + 1;
} 
for ( let i = 1; i <= numerodidadi; i++){
    numerorisultato2 = Math.floor(Math.random() * (7 - 1) ) + 1;
} 
for ( let i = 1; i <= numerodidadi; i++){
    numerorisultato3 = Math.floor(Math.random() * (7 - 1) ) + 1;
} 
for ( let i = 1; i <= numerodidadi; i++){
    numerorisultato4 = Math.floor(Math.random() * (7 - 1) ) + 1;
} 

document.getElementById('d').innerHTML = numerorisultato ;
document.getElementById('d2').innerHTML = numerorisultato2 ;
document.getElementById('d3').innerHTML = numerorisultato3 ;
document.getElementById('d4').innerHTML = numerorisultato4 ;

// console.log(numerorisultato);
// console.log(numerorisultato2);
// console.log(numerorisultato3);
// console.log(numerorisultato4);

let valorecomputer = (numerorisultato + numerorisultato2);
console.log(valorecomputer);
// calcolo computer

let valoreumano = (numerorisultato3 + numerorisultato4);
console.log(valoreumano);
// calcolo umano

if (valorecomputer > valoreumano) {
   document.getElementById('vincitore').innerHTML = 'Spiacente hai perso Riprova..';
}
else if (valorecomputer < valoreumano){
   document.getElementById('vincitore').innerHTML = 'Complimenti hai vinto!';
}
else{
   document.getElementById('vincitore').innerHTML = 'Pareggio';
}
// calcolo chi ha vinto
}


button.addEventListener('click', fx)