


function reverse(arr) {
    // your code here
    arr.reverse(arr);


    return arr;
}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]


function reverseArray(arr) {
    var newArray = [];
    for (var i = arr.length - 1; i >= 0; i--) {
    newArray.push(arr[i]);
    }
    return newArray;
}

function reverseARray(arr){

    for(var i =0; i<arr.length/2; i++){
        var temp = arr[i];
        arr[i] = arr[arr.length -1-i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}
