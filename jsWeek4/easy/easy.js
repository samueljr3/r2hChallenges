let input = [1.5, 3, 2.5, 1] ;

console.log(avg(input));

function avg(array){
    let avg = 0;
    for(let i = 0; i < array.length; i++){
        avg += array[i];
    }
    return avg / array.length;
}