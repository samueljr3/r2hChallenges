let text = prompt("Enter some text");

if(text == text.toLowerCase()){
    console.log("User was whispering");
}
else if(text == text.toUpperCase()){
    console.log("User was shouting");
}
else{
    console.log("Talking normally");
}