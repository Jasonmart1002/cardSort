const values = [1,2,3,4,5,6,7,8,9,10,11,12,13];
let cardValue = values[Math.floor(Math.random() * values.length)];
const suits = ['&#9824;', '	&#9827;', '&#9829;', '&#9830;']
let cardSuit = suits[Math.floor(Math.random() * suits.length)]

  let card = `<div class="card">
                  <div class="card-body">
                    ${cardValue} ${cardSuit} ${cardValue}
                  </div>
                </div>`;

 function dealCards(){
   
  let userSelection = +document.querySelector('#input').value
  
  for ( i = 0; i < userSelection; i++){
    document.querySelector('#cardDisplay').innerHTML +=  card;
  }
 }
