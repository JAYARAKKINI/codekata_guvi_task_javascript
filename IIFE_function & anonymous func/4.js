//return all prime numbers using IIFE function
var arr = [3, 5, 7, 79, 7, 2, 6, 9, 4];

(function() {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 2) {
            console.log(2);
        }
        for (var k = 2; k < arr[i]; k++) {
            if (k == arr[i] - 1) {
                console.log(arr[i]);
            } else if (arr[i] % k == 0) {
                break;
            }
        }
    }
})();

//return all prime numbers using anonymous function
var ano = function(arro) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 2) {
            console.log(2);
        }
        for (var k = 2; k < arr[i]; k++) {
            if (k == arr[i] - 1) {
                console.log(arr[i]);
            } else if (arr[i] % k == 0) {
                break;
            }
        }
    }
}
ano(arr);
