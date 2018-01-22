function init(){
    //get the variables from the page
    //erturns and object with all the variables
    var userVars = {};
    userVars.nSize = document.getElementById("nSize").value;
    userVars.boxSize = document.getElementById("boxSize").value;
    userVars.dupesInBox = document.getElementById("dupesInBox").checked;
    userVars.runs = document.getElementById("runs").value;
    //Find and alert for bugs
    return userVars;
}


function buy(col, size, dup){
    //returns an array of size boxSize containing valid numbers
    var box = [];

    function select(col){
        //retunrs an in bounds number
        return Math.floor(Math.random() * col);
    }

    //build a dupe free box, unless there can be dupes
    if (!dup){
        do {
            var thisBox = [];
            var newNum = select(col);
            if (!box.includes(newNum)){
                box.push(newNum);
            }
        } while (box.length < size);
    } else {
        for (var i=0; i<size; i++){
            box.push(select(col))
        }
    }
    return box;
}

function buyUntilFull(vars){
    //buys boxes until the collection is complete
    //returns the number of tries it took

    //build an empty array nSize long
    var current = [];
    do {
        current.push(0);
    }while (current.length < vars.nSize);

    var done = false;
    var tries = 0;

    do{
        tries++;
        var newBox = buy(vars.nSize, vars.boxSize, vars.dupesInBox);
        for(var n in newBox){
            current[newBox[n]]++;
        }
        if(!current.includes(0)){
            done = true;
        }
    } while (!done);

    return tries;
}

function main(){
    //Collects the Users Variables
    var settings = init();

    //Create an empty object for the results
    var results = {};
    //collect the whole set as many times as the user wishes
    for(var i = 0; i < settings.runs; i++){
        var thisTry = buyUntilFull(settings);
        if (thisTry in results){
            results[thisTry]++;
        } else {
            results[thisTry] = 1;
        }
    }

    console.log(results);
}
