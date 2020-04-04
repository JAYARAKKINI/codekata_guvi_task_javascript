const readline=require("readline");
const inp=readline.createInterface({input:process.stdin});
inp.on("line",(data)=>{
    var a=data.split("");
    var b=[];
   for(i=0;i<a.length;i++){
       if((parseInt(a[i])%2)!=0){
           b.push(a[i]);
       }continue;
   }
  if((b.length)==0){
    console.log("-1");
  }else{
  console.log(b.join(" "));
  }
});
