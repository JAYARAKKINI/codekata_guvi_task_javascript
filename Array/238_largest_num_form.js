const readline=require("readline");
const inp=readline.createInterface({input:process.stdin});
const n=[]
inp.on("line",(data)=>{
    n.push(data)
})
inp.on("close",()=>{
   var a=n[0];
   var b=n[1].split(" ");
   var c;
   c=b.sort()
   var d;
   d=c.reverse()
   console.log(d.join(""))
});
