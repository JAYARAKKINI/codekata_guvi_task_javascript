const readline=require('readline');
const imp=readline.createInterface({
    input:process.stdin
});
var userInput=[];
imp.on("line",(data)=>{
    userInput.push(data)
})
imp.on("close",()=>{
  var d=userInput[0];
  var a=d.split(""),c=[],b;
  for(var i=0;i<a.length;i++)
  {
    for(var j=i+1;j<a.length;j++)
    {
      if(a[i]==a[j])
      {
       b = d.substr(i,j+1);
        c.push(b);
      }
    }
  }
  var z=[];
  for(var i=0;i<c.length;i++)
  {
      var o=c[i].split();
      var r=c[i].split("").reverse().join("");
      if(o==r)
      {
          z.push(o);
         
      }
  }
  var s=z.sort(),l=[];
  for(var i=0;i<s.length;i++)
  {
      var n=s[i].toString();
      l.push(parseInt(n.length));
  }
  var array = Math.max.apply(Math,l);
  var y=l.indexOf(array);
  console.log(z[y].toString());
});
