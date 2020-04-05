const readline=require("readline");
const inp=readline.createInterface({input:process.stdin});
const n=[];
inp.on("line",(data)=>{
    n.push(data);
});
inp.on("close",()=>{
   var a=n[0];
   var b=n[1];
   var s1="";
   var s2="";
   s1=s1+n[0];
   s2=s2+n[1];
   var c;
   c=s1+s1;
   var d=c.indexOf(s2);
   if(d>0){
   console.log(d-1);
   }
   else{
       console.log(0);
   }
});
