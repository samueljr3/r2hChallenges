let tomHeight = 9;
let tomMass = 8

let jerryHeight = 10;
let jerryMass = 45;

let tomHigherBMI;

if((tomMass / Math.pow(tomHeight,2)) > (jerryMass / Math.pow(jerryHeight,2))){
    tomHigherBMI = true;
    console.log(`Is Tom’s BMI higher than Jerry’s? ${tomHigherBMI}`);
}
else if((tomMass / Math.pow(tomHeight,2)) < (jerryMass / Math.pow(jerryHeight,2))){
    tomHigherBMI = false;
    console.log(`Is Tom’s BMI higher than Jerry’s? ${tomHigherBMI}`);
}