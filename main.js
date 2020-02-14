// Random cards
function dealCards(){

    // Get input value
    let userSelection = +document.querySelector('#input').value

    // Get the random cards
    for ( i = 0; i < userSelection; i++){

        //Card numbers
        const values = [1,2,3,4,5,6,7,8,9,10,11,12,13];
        let cardValue = values[Math.floor(Math.random() * values.length)];

        //Card suits
        const suits = ['&#9824;', '	&#9827;', '&#9829;', '&#9830;']
        let cardSuit = suits[Math.floor(Math.random() * suits.length)]

        //Card
        let card = `<div class="card">
                    <div class="card-body">
                        ${cardValue} ${cardSuit} ${cardValue}
                    </div>
                    </div>`;
        
        //Display the card
        document.querySelector('#cardDisplay').innerHTML +=  card;

    }

    //Disables button
    document.getElementById("disable0").disabled = true;

}


//Sorting function
function sortCards() {

    //Bubblesort
    const bubbleSort = (arr) => {

        //Declare first wall
        let wall = arr.length - 1;
     
        while (wall > 0){
            let index = 0;
            while (index < wall) {
            if (arr[index] > arr[index + 1]) { 
                let aux = arr[index]; 
                arr[index] = arr[index + 1];
                arr[index + 1] = aux;
            }
            
            //Add index
            index++;
            }

            //Subtract wall
            wall--; 
        }

        //Return outcome
        return arr;
    };
}   
