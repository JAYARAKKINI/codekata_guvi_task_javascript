const readline=require("readline");
const inp=readline.createInterface({input:process.stdin});
inp.on("line",(data)=>{
   var a=data.split("") ;
   var b;
   var c=[];
   var sum=0;
   for(i=0;i<a.length;i++){
       b=Math.pow(parseInt(a[i]),parseInt(i))
       c.push(b)
   }
   for(j=0;j<c.length;j++){
       sum=parseInt(sum)+parseInt(c[j])
   }
   console.log(sum)
});
