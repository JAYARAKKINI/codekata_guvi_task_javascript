//using findIndex() function

var ages = [3, 10, 18, 20];

function checkAdult(age) {
  return age >= 18;
}

function myFunction() {
  console.log(ages.findIndex(checkAdult));
}


//without using findIndex() function

var ages = [3, 10, 18, 20];
var age=[]
for(i=0;i<ages.length;i++){
    if(ages[i]>=18)
    {
     age.push(i)
    }
}
console.log(age[0])
