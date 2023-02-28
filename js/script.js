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

let messageEl = document.getElementById('message');


buttonEmailEl.addEventListener('click', function() {

    let mail = false;

    for(let i = 0; i < listaMailEl.length; i++) {
        
        if(listaMailEl[i] == checkMailEl.value) {
            mail = true;
        } 
        
    }

    
    
    if(mail == true) {
        
        messageEl.innerText = 'Sei registrato, benvenuto';
        

    } else {

        messageEl.innerText = 'Ci dispiace, email inesistente';
        
    }
    

})


//----------------------------


let user = 'Player';

let computerScore

let userScore

let resultEl = document.getElementById('result');

let diceMessageEl = document.getElementById('diceMessage');

let computerMessageEl = document.getElementById('computerMessage');

let diceButtonEl = document.getElementById('diceButton');


diceButtonEl.addEventListener('click', function(){

  let userScore = Math.floor(Math.random() * 6) + 1;
  console.log(user +' hai realizzato '+ userScore +" punti");
    diceMessageEl.innerText = (user +' hai realizzato '+ userScore +" punti");
   

  let computerScore = Math.floor(Math.random() * 6) + 1;
  console.log('Il computer ha realizzato '+ computerScore +" punti");
    computerMessageEl.innerText = ('Il computer ha realizzato '+ computerScore +" punti");
  

  if(userScore > computerScore) {
    resultEl.innerText = ('Hai vinto!');    
    
  }else if (userScore == computerScore) {
    resultEl.innerText = ('Pareggio');

  }else {
    resultEl.innerText = ('Hai perso!');
  }

})



