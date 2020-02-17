// Random cards

let bubbleArray = [] //new array


//Deal cards
function dealCards() {
        
    bubbleArray = []

    // Clear display
    document.querySelector('#cardDisplay').innerHTML = "";

    // Get input value
    let userSelection = +document.querySelector('#input').value

   
     
    // Get the random cards
    for ( i = 0; i < userSelection; i++){

        //Card numbers
        const values = [1,2,3,4,5,6,7,8,9,10,11,12,13];
        let cardValue = values[Math.floor(Math.random() * values.length)];
        bubbleArray.push(cardValue)
        console.log (bubbleArray)


        //Card suits
        const suits = ['&#9824;', '	&#9827;', '&#9829;', '&#9830;']
        let cardSuit = suits[Math.floor(Math.random() * suits.length)]
    

        //Card
        let card = `<div class="card">
                    <div class="card-body">
                        ${cardValue} ${cardSuit} ${cardValue}
                    </div>
                    </div><br />`;
        
        //Display the card
        document.querySelector('#cardDisplay').innerHTML +=  card;

    }
}






const sortCards = () => {
    let wall = bubbleArray.length - 1; 
    while (wall > 0){
        let index = 0;
        while (index < wall) {
          if (bubbleArray[index] > bubbleArray[index + 1]) { 
            let aux = bubbleArray[index]; 
            bubbleArray[index] = bubbleArray[index + 1];
            bubbleArray[index + 1] = aux;
          }
          index++;
        }
        wall--;
    }
    document.querySelector('#cardSorter').innerHTML = 
                    `<div class="card">
                     <div class="card-body">
                         ${bubbleArray}
                     </div>
                     </div>`;

    return bubbleArray;

};   

