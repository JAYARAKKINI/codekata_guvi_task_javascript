const readline=require('readline');
const inp=readline.createInterface({input:process.stdin})
const n=[]
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=[]
  a=n[0].split(" ");
  var f=a[0],s=a[1]
  if(f<s)
    console.log(f);
  else
    console.log(s);
});
