const readline=require("readline");
const inp=readline.createInterface({input:process.stdin});
const n=[];
inp.on("line",(data)=>{
    n.push(data);
});
inp.on("close",()=>{
   var a=n[0].split(" ");
   var b=n[1].split(" ");
   var c;
   var d=[];
   c=b.sort();
   for(i=0;i<a[0];i++){
       if(parseInt(c[i])<parseInt(a[1])){
           d.push(c[i]);
       }
   }
   if(d.length==0){
       console.log(-1);
   }
   else{
   console.log(d.join(" "));
   }
});
