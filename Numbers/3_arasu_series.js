const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
const a=[];
inp.on("line",(data)=>{
    a.push(data);
});
inp.on("close",()=>{
    var b=parseInt(a[0]),c=1,s=[],e=1;
    for(var i=1;i<=b;i++)
    {
       c+=e;
       e+=2;
       s.push(c);
    }
    console.log(s.join(" "));
    });
