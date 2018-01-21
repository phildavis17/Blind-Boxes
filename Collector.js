/* Things to consider
Target completion %
cost of each purchase
Item distribution
*/



// Variables
var boxSize = 1;
var dupesInBox = false;
var runs = 1000;

var count = 0;

function init(){
    //Collect all the variables from the page
    var nSize = document.getElementById("nSize").value;
    var boxSize = document.getElementById("boxSize").value;
    var runs = document.getElementById("runs").value;
    console.log(nSize);
    console.log(document.getElementById("dupesInBox").value);
}

function buy(c){
    var newNum = Math.floor(Math.random()*c.length;
    return newNum;
}

function collect(/*SOMETHING*/){
    var done = false;
    var tries = 0;
    var collection = [];

    // Initialize the collection
    for(var i = 0; i < nSize; i++){
        collection[i] = 0;
    }

    //The main loop
    do {
        tries++;
        collection[buy(collection)]++;
        for (var n in collection){
            if(n == 0){
                break;
            }
        }
    }while (!done);

    return tries;

//create a dict with nSize items
//set all their values to 0
//generate BOXSIZE numbers at random
//iterate that number's value
//itterate the count
//check if all the items in the collection have a non zero value
//repeat until complete
//return the count

//repeat the above loop runs times
//display the mean and median

}

//collect the Variables
//build the Collection
