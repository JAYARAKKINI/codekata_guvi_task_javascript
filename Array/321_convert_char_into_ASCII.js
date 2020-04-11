const readline=require("readline");
const inp=readline.createInterface({input:process.stdin});
inp.on("line",(data)=>{
   var n=data.split("");
   var ch=""
   ch=n;
   var a=[];
   var b;
   var sum=0;
   for(i=0;i<ch.length;i++){
       b=ch[i].charCodeAt()
       a.push(b)
   }
   for(j=0;j<a.length;j++){
      sum=parseInt(sum)+parseInt(a[j])
   }
   console.log(sum)
});
