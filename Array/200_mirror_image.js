const readline=require("readline");
const inp=readline.createInterface({input:process.stdin})
const n=[];
inp.on("line",(data)=>{
   n.push(data)
 });
inp.on("close",()=>{
    var a=n[0];
    var b=n[1].split(" ");
    var c=n[2].split(" ");
    var d;
    d=c.reverse();
    if(parseInt(b)==parseInt(d)){
        console.log("yes")
    }
    else{
        console.log("no")
    }
 });
