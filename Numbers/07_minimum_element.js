const readline=require('readline');
const inp=readline.createInterface({
    input:process.stdin
});
const n=[];
inp.on("line",(data)=>{
    n.push(data);
});
inp.on("close",()=>{
    var a=n[0];
    var b=n[1].split(" ");
    var list=[];
      for(var i=0;i<b.length;i++)
      {
          for(j=i+1;j<b.length;j++)
          {
          if(b[i]<b[j])
          list.push(b[i]);
          }
      }
      console.log(list[b.length]);
});
