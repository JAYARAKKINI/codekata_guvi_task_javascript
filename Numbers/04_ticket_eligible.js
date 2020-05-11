const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
const n=[];
inp.on("line",(data)=>{
    n.push(data);
});
inp.on("close",()=>{
    var a=n[1].split(" ");
    var b=parseInt(n[2]);
    var c=[];
    for(var i=0;i<a.length;i++)
    {
        if(parseInt(a[i])%b==0)
        {
            c.push("1");
        }
        else
        {
            c.push("0");
        }
    }
    console.log(c.join(" "));
});
