const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
const a=[];
inp.on("line",(data)=>{
    a.push(data);
});
inp.on("close",()=>{
    var b=a[0].split(" ");
    var k=parseInt(b[0]);
    var x=parseInt(b[1]);
    var s=0;
    for(var i=0;i<k-1;i++)
    {
      s+=10;
      s-=x;
     }
    console.log(s);
});
