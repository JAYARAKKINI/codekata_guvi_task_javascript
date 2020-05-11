const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
const a=[];
inp.on("line",(data)=>{
    a.push(data);
});
inp.on("close",()=>{
    var b=a[1].split(" ");
    var k=parseInt(a[2]);
    var s=[];
    for(var i=0;i<b.length;i++)
    {
        if(parseInt(b[i])%k==0)
        {
            s.push("1");
        }
        else
        {
            s.push("0");
        }
    }
    console.log(s.join(" "));
});
