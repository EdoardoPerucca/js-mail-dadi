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
        
        if(listaMailEl[i] == checkMailEl.value) {
            mail = true;
        } 
        
    }

    document.getElementById("message").style.display = "block";
    
    if(mail == true) {
        
        document.getElementById('mailOk').innertext = 'Congratulazioni';
        console.log('mailOk');

    } else {

        document.getElementById('mailKo').innertext = 'Ci dispiace';
        console.log('mailKo');

    }
    

})




