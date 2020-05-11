const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
inp.on("line",(data)=>{
    var n=[];
    n=data.split(" ");
    var b=n[0];
    var c=n[1];
    var d;
    if(parseInt(b)>parseInt(c)){
        d=parseInt(b)-parseInt(c);
        console.log(parseInt(d));
    }
    else{
        d=parseInt(c)-parseInt(b);
        console.log(parseInt(d));
    }
});
