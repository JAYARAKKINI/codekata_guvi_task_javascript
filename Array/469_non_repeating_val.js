const readline=require("readline");
const inp=readline.createInterface({input:process.stdin});
const x=[];
inp.on("line",(data)=>{
    x.push(data);
});
inp.on("close",()=>{
    var a=x[0];
    var arr=x[1].split(" ");
    var n=arr.length;
function nonrep() {
  for (var i = 0; i < n; i++) {
    var j;
    for (j = 0; j < n; j++)
      if (i != j && arr[i] == arr[j]) {
        result = arr[i];
        break;
      }
    if (j == n)
      return arr[i];
  }
  return result;
}
console.log(nonrep())
});
