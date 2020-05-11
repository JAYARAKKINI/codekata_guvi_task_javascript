const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
inp.on("line",(data)=>{
    n1=data.split(' ');
    var a=parseInt(n1[0]);
    var b=parseInt(n1[1]);
    var c=parseInt(n1[2]);
    if((a!==b)&&(b!==c)&&(c!==a)){
        console.log('yes');
    }
    else{
        console.log('no');
    }
});
