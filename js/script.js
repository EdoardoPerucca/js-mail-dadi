//Mail
//Chiedi all’utente la sua email,
//controlla che sia nella lista di chi può accedere,
//stampa un messaggio appropriato sull’esito del controllo.


// Chiedere all'utente di inserire la sua email
// ?SE email esiste stampa messaggio positivo
// ALTRIMENTI stampa messaggio differente


let checkMailEl = document.getElementById('checkMail');
console.log(checkMailEl);

let buttonEmailEl = document.getElementById('buttonEmail');

let listaMailEl = ['edoardo@libero.it', 'perucca@libero.it', 'edoardo.perucca@libero.it', 'perucca.edoardo@libero.it'];
console.log(listaMailEl);

let mail = false;


buttonEmailEl.addEventListener('click', function() {

    for(let i = 0; i < listaMailEl.length; i++) {
        
        if(listaMailEl[i] == checkMailEl) {
            document.getElementById('mailKo').innerhtml = 'Ci dispiace, questa email non esiste';
            console.log('mailOk');

        } else {
            document.getElementById('mailOk').innerHTML = 'Complimenti, puoi accedere';
            console.log('mailOk');
        }
            
        
    }



})




