//remove duplicate from an array using IIFE function
var arr = [1, 2, 3, 6, 2, 8, 6, 1, 9, 9, 10, 12, 13, 6];

(function() {
    var out = [];
    count = 0;
    for (var i = arr.length - 1; i >= 1; i--) {
        for (var k = i - 1; k >= 0; k--) {
            if (arr[i] == arr[k]) {
                break;
            } else if (k == 0) {
                out[count] = arr[i];
                count += 1;
            }
        }
        out[count] = arr[0];
    }
    for (i = out.length - 1; i >= 0; i--) {
        console.log(out[i]);
    }

})();

//remove duplicate from an array using anonymous function
var ano = function(arro) {
    var out = [];
    count = 0;
    for (var i = arr.length - 1; i >= 1; i--) {
        for (var k = i - 1; k >= 0; k--) {
            if (arr[i] == arr[k]) {
                break;
            } else if (k == 0) {
                out[count] = arr[i];
                count += 1;
            }
        }
        out[count] = arr[0];
    }
    for (i = out.length - 1; i >= 0; i--) {
        console.log(out[i]);
    }
}
ano(arr);
