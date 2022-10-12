const button = document.getElementById('btn');
const database = ['saro1200@alice.it', 'roberto.carlos@alice.it', 'nino_nino_nino@gmail.com']
console.log(database);

let fx = function() {
    let usermail = document.getElementById('eml').value

    let check = false;
    for (let i = 0; i < database.length; i++) {
        
        if (usermail == database[i]) {
            check = true
        }
        

        if (check == true) {
            document.getElementById('risposta').innerHTML = "Benvenuto"
            document.getElementById('risposta2').innerHTML = ""
        }
        else{
            document.getElementById('risposta2').innerHTML = "Email errata o non esistente."
            document.getElementById('risposta').innerHTML = ""
        }
    }
}




















button.addEventListener('click' ,fx);