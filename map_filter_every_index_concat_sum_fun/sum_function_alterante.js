//using reduce()  

var array = [1, 2, 3, 4, 5];
// Getting sum of numbers.
var sum = array. reduce(function(a, b){
return a + b;
}, 0);
console. log(sum);


//without using reduce()

var ages = [3, 10, 18, 20];
var sum=0
for(i=0;i<ages.length;i++){
    sum=parseInt(sum)+parseInt(ages[i])
}
console.log(sum)
