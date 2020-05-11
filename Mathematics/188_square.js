const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
const n=[];
inp.on("line",(data)=>{
    n.push(data);
});
inp.on('close',()=>{
    var a=n[0].split(' ');
    var b=n[1].split(' ');
    var c=n[2].split(' ');
    var d=n[3].split(' ');
    if(a[0]==a[1])
    {
        if((b[0]<b[1])&&(b[0]==a[0]))
        {
            if((c[0]==c[1])&&(c[0]==b[1]))
            {
                if((d[0]>d[1])&&(d[0]==c[0]))
                {
                    console.log('yes');
                }
                else{
                    console.log('no');
                }
            }
            else{
                console.log('no');
            }
        }
        else{
            console.log('no');
        }
    }
    else{
        console.log('no');
    } 
});
