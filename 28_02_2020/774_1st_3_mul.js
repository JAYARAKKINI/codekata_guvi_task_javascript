const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
inp.on("line",(data)=>{
    var a1=[]
    for(var a=1;a<=3;a++)
    {
        a1.push(a*data);
    }
    console.log(a1.join(' '));
});
