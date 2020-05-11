const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
inp.on("line",(data)=>{
 var n=data.split(" ");
 var a=n[0];
 var b=n[1];
 var sum;
 sum=parseInt(a)+parseInt(b);
 if((parseInt(sum))%2==0)
 {
     console.log('even');
 }
 else
 {
     console.log('odd');
 }
});
