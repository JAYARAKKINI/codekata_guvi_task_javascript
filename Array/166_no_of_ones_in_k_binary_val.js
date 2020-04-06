const readline=require("readline");
const inp=readline.createInterface({input:process.stdin});
const n=[];
inp.on("line",(data)=>{
   n.push(data) ;
});
inp.on("close",()=>{
   var a=n[0];
   var b=parseInt(a, 10).toString(2)
   var c=b.split("");
   var count=0;
   for(i=0;i<c.length;i++){
       if(parseInt(c[i])==1){
           count=count+1;
       }
   }
   console.log(count);
});
