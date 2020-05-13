//return 2 sorted arrays of 2 sorted arrays using IIFE function
var arr = [1, 2, 3, 6, 8, 9, 10, 12, 13];
var arr1 = [4, 6, 8, 9, 12, 14, 16, 20, 25];

(function() {
    if (arr.length % 2 == 0) {
        var len = arr.length / 2;
        console.log("median of first array is " + arr[len - 1] + " " + arr[len]);
        console.log("median of second array is " + arr1[len - 1] + " " + arr1[len]);
    } else {
        var len = Math.floor(arr.length / 2);
        console.log("median of first array is " + arr[len]);
        console.log("median of second array is " + arr1[len]);
    }

})();

//return 2 sorted arrays of 2 sorted arrays using anonymous function
var ano = function(arro) {
    if (arr.length % 2 == 0) {
        var len = arr.length / 2;
        console.log("median of first array is " + arr[len - 1] + " " + arr[len]);
        console.log("median of second array is " + arr1[len - 1] + " " + arr1[len]);
    } else {
        var len = Math.floor(arr.length / 2);
        console.log("median of first array is " + arr[len]);
        console.log("median of second array is " + arr1[len]);
    }
}
ano(arr);
