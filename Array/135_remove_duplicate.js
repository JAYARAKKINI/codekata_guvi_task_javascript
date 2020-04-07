const readline=require("readline");
const inp=readline.createInterface({input:process.stdin})
const n=[];
inp.on("line",(data)=>{
   n.push(data) 
});
inp.on("close",()=>{
   var a=n[1].split(" ");
   var b=n[0];
   var arr=[];
   for(i=0;i<parseInt(b);i++){
       arr.push(a[i])
   }
   let unique=[...new Set(arr)];
   console.log(unique.join(" "));
});
