const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
inp.on("line",(data)=>{
    var n=[];
    n=data.split(" ");
    var N=n[0];
    var M=n[1];
    var l;
    var o;
    l=parseInt(N)*parseInt(M);
    o=Math.pow(parseInt(N),2);
    if(parseInt(l)==parseInt(o))
    {
        console.log('yes');
    }
    else
    {
        console.log('no');
    }
});
