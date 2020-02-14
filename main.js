const values = [,2,3,4,5,6,7,8,9,10,11,12,13];
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
 
 
 function sortCards(){
  
    if (isProcessing) { return; }
    
  const bubbleSort = (arr) => {
  let wall = arr.length - 1; 
  while (wall > 0){
      let index = 0;
      while (index < wall) {
        if (arr[index] > arr[index + 1]) { 
          let aux = arr[index]; 
          arr[index] = arr[index + 1];
          arr[index + 1] = aux;
        }
        console.log(xxxxxxx)
        index++;
      }
      wall--; 
  }
return arr;
};
  document.querySelector('#cardSorter').innerHTML += card2

}