const readline=require("readline");
const inp=readline.createInterface({input:process.stdin});
const n=[];
inp.on("line",(data)=>{
    n.push(data);
});
inp.on("close",()=>{
   var a=n[0];
   var b=n[1].split(" ");
   let unique=[...new Set(b)];
   console.log(unique.join(" "));
});
