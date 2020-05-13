//sum of all numbers using IIFE function

var arr = [9,8,5,6,4,3,2,1];

(function() {
    sum = 0
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
})();

//sum of all numbers using anonymous function

var ano = function(arro) {
    sum = 0
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
}
ano(arr);
