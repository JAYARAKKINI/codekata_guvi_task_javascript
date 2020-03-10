const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
inp.on("line",(data)=>{
    var n=[]
    n=data.split();
    var a=n[0];
    var l=0;
    for(i=1;i<parseInt(a);i++)
    {
        if((parseInt(a)%parseInt(i))==0)
        {
            l=i;
        }
    }
    if(parseInt(l)>1)
    {
        console.log('yes');
    }
    else{
        console.log('no');
    }
})
