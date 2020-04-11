const readline=require("readline");
const inp=readline.createInterface({input:process.stdin});
inp.on("line",(data)=>{
    var a=data;
    var b;
    var c;
  //outer loop
  for(i=parseInt(a);i>=1;i--)
   {
   //inner loop
    for(j=1;j<=parseInt(i);j++)
   {
     b='1'.repeat(i);
     c=b.split("")
     console.log(c.join(" "))
     break;
    }

   }
});
