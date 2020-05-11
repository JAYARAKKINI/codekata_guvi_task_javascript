const readline=require('readline');
const inp=readline.createInterface({
    input:process.stdin
});
const n=[];a
inp.on("line",(data)=>{
    n.push(data);
});
inp.on("close",()=>{
    var a=n[0].split("");
    var c=a.length;
    if(c>=2)
     console.log("Saturated");
    else
     console.log("Unsaturated");
});
