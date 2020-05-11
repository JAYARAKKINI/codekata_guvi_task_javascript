const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
inp.on("line", (data) => {
function roman(a) {
if(a === null)
return -1;
var n = char(a.charAt(0));
var b, c;
for(var i = 1; i < a.length; i++){
c = char(a.charAt(i));
b = char(a.charAt(i-1));
if(c <= b){
n =n+c;
} 
else 
{
n = n - b*2 + c;
}
}
return n;
}
function char(sh){
switch (sh){
case 'I': 
    return 1;
case 'V': 
    return 5;
case 'X': 
    return 10;
case 'L': 
    return 50;
case 'C': 
    return 100;
default: return -1;
}
}
console.log(roman(data));
});
