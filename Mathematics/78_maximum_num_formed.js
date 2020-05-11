const readline=require("readline");
const inp=readline.createInterface({input:process.stdin});
inp.on("line",(data)=>{
   var a=data.split("");
  var b=a.sort();
  var c=b.reverse();
  console.log(c.join(""));
});
