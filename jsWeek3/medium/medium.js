function sharePizza(people){
    return (cutPizzaSlices / people).toFixed(2);
}

let cutPizzaSlices = parseInt(prompt("How many pizza slices are there?"));

let peopleNum = parseInt(prompt("How many people are there?"));

console.log(`Each person gets ${sharePizza(peopleNum)} slices of pizza`);
