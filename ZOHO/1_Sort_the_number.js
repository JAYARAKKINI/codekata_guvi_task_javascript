const readline=require("readline");
const inp=readline.createInterface({input:process.stdin});
const n=[]
inp.on("line",(data)=>{
  n.push(data);
});
inp.on("close",()=>{
  var a=n[0];
  var b=[];
  for(var i=1;i<n.length;i++){
      var c=n[i].split(" ")
      for(var j=0;j<c.length;j++){
          b.push(c[j])
      }
  }
  console.log(b.sort((a,b) => a-b).join(" "))
});
