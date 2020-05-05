//using every() function

var ages = [32, 33, 16, 40];

function checkAdult(age) {
  return age >= 18;
}

function myFunction() {
console.log(ages.every(checkAdult));
}

//without using every()

var ages = [32, 33, 16, 40];
var con=[];
for(var i=0;i<ages.length;i++){
 if(ages[i] >= 18){
     con.push(ages[i])
 }
}
if((con.length)==(ages.length)){
  console.log("true")
}
else{
    console.log("false")
}
