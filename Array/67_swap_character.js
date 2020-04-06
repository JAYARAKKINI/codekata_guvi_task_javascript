const readline=require("readline");
const inp=readline.createInterface({input:process.stdin});
const n=[];
inp.on("line",(data)=>{
   n.push(data) ;
});
inp.on("close",()=>{
   var a=n[0].split("");
   var b=[];
   var c;
   for(i=0;i<a.length;i++){
       c=a[i+1]+a[i]
       if((i==0)||(i%2==0)){
       b.push(c)
       }
   }
  
   console.log(b.join(""));
});
