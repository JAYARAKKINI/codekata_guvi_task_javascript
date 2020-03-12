const readline=require("readline");
const inp=readline.createInterface({input:process.stdin});
const n=[]
inp.on("line",(data)=>{
    n.push(data)
});
inp.on("close",()=>{
   var a=n[0]
   var b=n[1].split(" ");
   var val=[]
   var sum=0;
   for(i=0;i<b.length;i++){
       sum=parseInt(sum)+parseInt(b[i]);
       val.push(sum)
   }
   console.log(val.join(" "));
});
