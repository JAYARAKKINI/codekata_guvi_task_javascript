const readline=require("readline");
const inp=readline.createInterface({input:process.stdin});
inp.on("line",(data)=>{
   var a=data.split(" ");
   var b=[]
   var c;
   var d;
   for(i=0;i<parseInt(a.length);i++){
       c=a[i].split("")
       d=c.reverse()
       b.push(d.join(""))
   }
   console.log(b.join(" "))
});
