const readline = require("readline");
const inp = readline.createInterface({
  input: process.stdin
});
const a=[];
inp.on("line", (data) => {
  a.push(data);
});
inp.on("close",()=>{
    var b=a[0].split("");
    var n=parseInt(a[0]);
    var s=1;
    var f=[];
    for(var j=1;j<=n;j+=2){
        var s=1;
    for(var i=1;i<=j;i++)
    {
        s*=i;
    }
    f.push(s);
    }
    console.log(f.join(" "));
    
});
