const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin
});
var user=[];
inp.on("line",(data)=>{
  user.push(data);
});
inp.on("close",()=>{
    var r=[],d=[];
    var a=user[0];
  var arr=user[1].split(" ");
 var c=arr.sort(function(a,b){
     return a-b;
 });
  for(var i=c.length-1;i>=0;i--)
  {
      d.push(parseInt(c[i]));
  }
  var p=parseInt(a/2);
  if(a%2!==0)
 {
     p=p+1;
 }
 for(var j=0;j<p;j++)
 {
     r.push(parseInt(d[j]),parseInt(c[j]));
 }
 var u= [...new Set(r)];
 console.log(u.join(" "));
});
