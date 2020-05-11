const readline=require('readline');
const inp=readline.createInterface({
    input:process.stdin
});
const userInput=[];
inp.on("line",(data)=>{
    userInput.push(data);
});
inp.on("close",()=>{
    var a=userInput[0];
    var b=userInput[1].split(" "),c=[];
    var count;
    var t=-1;
    for(var i=0;i<b.length;i++)
    {
        count=0;
        for(var j=i+1;j<=b.length;j++)
        {
        if(parseInt(b[i])>parseInt(b[j]))
        {
        count=1;
        c.push(parseInt(b[j]));
        break;
        }
        }
        if(count===0)
{
        c.push(parseInt(t));
}
        }
        console.log(c.join(" "));
});
