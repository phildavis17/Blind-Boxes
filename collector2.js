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

function select(col){
    //retunrs an in bounds number
    return Math.floor(Math.random() * col);
}

function buy(col, size, dup){
    //returns an array of size boxSize containing valid numbers
    var box = [];

    //build a dupe free box, unless there can be dupes
    if (!dup){
        do {
            var newNum = select(col);
            if (!box.includes(newNum)){
                box.push(newNum);
            }
        } while (box.length < size);
    } else {
        for (var i=0; i<size; i++){
            box.push(select(col));
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

function showResults(res){
    var text = document.getElementById('results'); // The main block of text
    var runCount = document.getElementById('runCount');
    var min = document.getElementById('min');
    var max = document.getElementById('max');
    var ave = document.getElementById('ave');
    var keys = Object.keys(res);
    var vals = Object.values(res);


    min.textContent = Math.min(...keys);
    max.textContent = Math.max(...keys);

    runCount.textContent = 'TESTING';

    //And then show the results

    text.style.display = 'block';
}

function main(){
    var settings = init(); //Collects the Users Variables
    var results = {}; //Create an empty object for the results

    document.getElementById('running').style.display = 'block';

    //collect the whole set as many times as the user wishes
    for(var i = 0; i < settings.runs; i++){
        var thisTry = buyUntilFull(settings);
        if (thisTry in results){
            results[thisTry]++;
        } else {
            results[thisTry] = 1;
        }
    }

    document.getElementById('running').style.display = 'none';

    console.log(results);
    showResults(results);
}
