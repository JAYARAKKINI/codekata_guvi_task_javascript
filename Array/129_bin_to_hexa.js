const readline=require("readline");
const inp=readline.createInterface({input:process.stdin});
const n=[];
inp.on("line",(data)=>{
   n.push(data) ;
});
inp.on("close",()=>{
   var a=n[0];
   var number = a;
var hexa = parseInt(number, 2).toString(16);
console.log(hexa);
});
