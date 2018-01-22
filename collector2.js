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
    console.log("collection built.");

    var done = false;
    var tries = 0;

    do{
        tries++;
        var newBox = buy(vars.nSize, vars.boxSize, vars.dupesInBox);
        console.log("this box: " + newBox);
        for(var n in newBox){
            current[newBox[n]]++;
        }
        if(!current.includes(0)){
            done = true;
        }
        console.log(current);
    } while (!done);

    return tries;
}

function main(){
    console.log("This is a test");
    //executes the script
    var settings = init();
    //console.log(settings.nSize);
    //console.log(settings.dupesInBox);
    var test = buyUntilFull(settings);
    console.log(test);
}
