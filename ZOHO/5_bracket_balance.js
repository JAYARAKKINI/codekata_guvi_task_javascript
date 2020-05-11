const readline=require('readline');
const imp=readline.createInterface({
    input:process.stdin
});
var userInput=[];
imp.on("line",(data)=>{
    userInput.push(data);
});
var a=[],count=0,count1=0;
imp.on("close",()=>{
  var a=userInput[0].split("");
  for(var i=0;i<a.length;i++)
  {
  if(a[i]=='{')
  {
  count=count+1;
  }
  if(a[i]=='}')
  {
      count1=count1+1;
  }
  if(a[i]=='(')
  {
  count=count+1;
  }
  if(a[i]==')')
  {
      count1=count1+1;
  }
  if(a[i]=='[')
  {
  count=count+1;
  }
  if(a[i]==']')
  {
      count1=count1+1;
  }
  }
  if(count==count1)
  {
      console.log("yes");
  }
  else
  {
      console.log("no");
  }
});
