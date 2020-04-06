const readline=require("readline");
const inp=readline.createInterface({input:process.stdin});
const n=[];
inp.on("line",(data)=>{
   n.push(data) ;
});
inp.on("close",()=>{
   var a=n[0].split(" ");
   var b=n[1].split(" ");
   var c=[];
   for(i=0;i<(parseInt(a[0])-parseInt(a[1]));i++){
       c.push(b[i]);
   }
   console.log(c.join(" "));
});
