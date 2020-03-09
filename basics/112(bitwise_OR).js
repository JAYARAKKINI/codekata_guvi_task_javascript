const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
const n=[]
inp.on("line",(data)=>{
    n.push(data);
});
inp.on("close",()=>{
   var a=parseInt(n[0])
   var b=n[1].split(' ')
   var L=parseInt(b[0])
   var R=parseInt(b[1])
   console.log(L|R);
});
