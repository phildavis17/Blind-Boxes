function init(){
    //get the variables from the page
    //erturns and object with all the variables
    var userVars = {};
    userVars.nSize = document.getElementById("nSize").value;
    userVars.boxSize = document.getElementById("boxSize").value;
    userVars.dupesInBox = document.getElementById("dupesInBox").checked;
    userVars.runs = document.getElementById("runs").value;
    return userVars;
}


function buy(col, size, dup){
    //returns an array of size boxSize containing valid numbers

    var box = [];

    function select(col){
        return Math.floor(Math.random() * col);
    }

    for (i=0; i<size; i++){
        var thisBox = [];
        var newNum = select(col);
        if (!box.includes(newNum)){
            box.push(newNum);
        }
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
    console.log("This is a test");
    //executes the script
    var settings = init();
    //console.log(settings.nSize);
    //console.log(settings.dupesInBox);
    var test = buy(settings.nSize, settings.boxSize, settings.dupesInBox);
    console.log(test);
}
