const readline=require("readline");
const inp=readline.createInterface({input:process.stdin});
const n=[];
inp.on("line",(data)=>{
   n.push(data) ;
});
inp.on("close",()=>{
   var a=n[0];
   var b=n[1].split(" ");
   var c=[];
   var sum=0;
   for(i=0;i<parseInt(a)-1;i++){
       var d=parseInt(b[i])+parseInt(b[i+1])
       c.push(d);
   }
   for(j=0;j<c.length;j++){
        sum=sum+parseInt(c[j]);
   }
   console.log(sum);
});
