


function betterThanAverage(arr) {
    var sum = 0;
    var avg = 0;
    var count = 0;
    // count how many values are greated than the average
    for(var i =0; i<arr.length;i++){
        sum = sum + arr[i];
    }
    avg= sum/ arr.length;
    for(var i =0; i<arr.length;i++){
        if(avg< arr[i]){
            count++;
        }
    }
    
    
    
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4