const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
const a=[];
inp.on("line",(data)=>{
    a.push(data);
});
inp.on("close",()=>{
    var b=parseInt(a[0]);
    var c=0;
    for(var i=0;i<b;i++)
    {
        for(var j=0;j<b;j++)
        {
            if(parseInt(i)+parseInt(j)==b)
            {
                c+=1;
            }
        }
    }
    console.log(c);
    });
