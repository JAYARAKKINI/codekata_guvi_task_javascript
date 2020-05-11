const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin
});
var userInput=[];
inp.on("line",(data)=>{
  userInput.push(data);
});
inp.on("close",()=>{
var a=userInput[0].split(" ");
var b=userInput[1].split(" ");
var h=parseInt(a[0]);
var z=parseInt(a[1]);
var s=[],r=[];
for(var i=0;i<b.length;i++)
{
  for(var j=i;j<b.length;j++)
  {
    for(var k=i;k<=j;k++)
    {
      s.push(parseInt(b[k]));
    }
    r.push(s);
    s=[];
  }
}
var c=0;
for(var l=0;l<r.length;l++)
{
    var m=Math.max.apply(null,r[l]);
    if(m>z)
    {
        c=c+1;
    }
}
console.log(c);
});
