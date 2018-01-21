function init(){
    //get the variables from the page
    //erturns and object with all the variables
    var userVars = {};
    userVars.nSize = document.getElementById("nSize");
    userVars.boxSize = document.getElementById("boxSize");
    userVars.dupesInBox = document.getElementById("dupesInBox");
    userVars.runs = document.getElementById("runs");
    return userVars;
}

function buy(col, size, dup){
    //returns an array of size boxSize containing valid numbers

    var box = [];

    function select(col){
        return Math.floor(Math.random() * col.length);
    }

    for (i=0; i<size; i++){
        box.push(select(col))
    }

    return box;
}

function buyUntilFull(){
    //buys boxes until the collection is complete
    //returns the number of tries it took

    //build the reference Collection

    //while not done
    //  buy
    //  check

    //return number of tries
}

function main(){
    //executes the script
    settings = init();
    buyUntilFull(settings);
}
