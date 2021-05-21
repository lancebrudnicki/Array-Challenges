


function reverse(arr) {
    // your code here
    arr.reverse(arr);


    return arr;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]