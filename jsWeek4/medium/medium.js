let array = [4,5,6,7,0,1,2];

console.log(`Val index: ${findVal(array, 7)}`);

function findVal(array, val){
    for(let i = 0; i < array.length; i++){
        if(array[i] == val){
            return i;
        }
    }
    return -1;
}