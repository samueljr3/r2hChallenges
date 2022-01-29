// Create a function that takes in an Array of numbers 
// example: let nums = [1,2,3,4,5,6,7]
// Inside the function do a for loop on the passed in array
// Inside the for loop have a condition that checks to see if the number 5 exists in the array and console log it if it does.
// Finally call that function with the passed in array.
function find5(array){
    for(let i =0; i < array.length;i++){
        if(array[i] == 5){
            return console.log("The number 5 exists in array");
        }
    }
    return console.log("Number 5 not found");
}

let nums = [1,2,3,4,5,6,7]

find5(nums);