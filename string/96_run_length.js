const readline = require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
inp.on("line",(data)=>{
a=data.split("");
function encodeWord(a) {
  let current, last, Count
  let output = ''
  for (let i = 0; i < a.length; i++) {
    if (typeof last === 'undefined') {
      last = a[i];
      Count = 1;
      continue;
    }
    if (a[i] !== last) {
      output += last + Count;
      last = a[i];
      Count = 1;
      continue;
    }
    Count++;
  }
  console.log(output + (last + Count))
  return (output + (last + Count))
}
encodeWord(a)
});
