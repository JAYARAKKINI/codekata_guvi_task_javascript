const readline=require("readline");
const inp=readline.createInterface({input:process.stdin})
inp.on("line",(data)=>{
   var a=data.split(" ");
   var b=a[0].split("");
   var c=a[1];
   var l=0;
   for(i=0;i<b.length;i++){
       if(parseInt(c)==parseInt(b[i])){
           l=l+1
       }
   }
   if(l>0){
       console.log(l);
   }
   else{
       console.log('-1')
   }
 });
