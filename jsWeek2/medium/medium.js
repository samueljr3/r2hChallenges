let input = 13
while((input > 12) || (input < 0)){ 
     input = prompt("Enter a number");
     if((input > 12) || (input < 0)){
         alert("Invalid entry, try again");
     }
}

let months = ["January", "February", "March", "April","May", "June", "July","August", "Septemeber", "October", "November", "December"];

console.log(months[input-1]);