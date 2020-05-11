const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin
});
var userInput=[];
inp.on("line",(data)=>{
  userInput.push(data);
});
inp.on("close",()=>{
    var a=userInput[0];
    function permutate(s) {
  if (s.length < 2)
    return s;
var permutations = [];
  for (var i = 0; i < s.length; i++) {
    var char = s[i];
 if (s.indexOf(char) != i)
      continue;
var remaining = s.slice(0, i) + s.slice(i + 1,s.length); 
    for (var Permutation of permutate(remaining))
      permutations.push(char + Permutation);
  }
  return permutations;
}
var b=[];
b=permutate(a);
for(var i=0;i<b.length;i++)
{
    console.log(b[i]);
}
});
