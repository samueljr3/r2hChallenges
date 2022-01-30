let coins = [1, 2, 5];
let amount = 11;

console.log(coinNum(coins, amount));
function coinNum(coinLocker, target){
    //sort the coin array descending incase was out of order
    coinLocker.sort(function(a,b){return b-a});
    
    //let currentCoin = coinLocker[0];
    let coinCount = 0;
    let currentAmount = target;
    let i = 0;

    while(1){
        if(currentAmount / coinLocker[i] < 1){
            i++;
        }
        else{
            coinCount = coinCount + Math.floor(currentAmount / coinLocker[i]);
            currentAmount = currentAmount % coinLocker[i];
            i++;
        }
        if(currentAmount == 0){
            return coinCount;
        }
        if(i == coinLocker.length){
          return -1;
        }


    }

}
