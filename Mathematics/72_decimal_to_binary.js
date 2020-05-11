const readline=require("readline");
const inp=readline.createInterface({input:process.stdin});
const n=[];
inp.on("line",(data)=>{
   n.push(data) ;
});
inp.on("close",()=>{
   var a=n[0];
   var number = a;
var bin = parseInt(number, 10).toString(2);
console.log(bin);
});
