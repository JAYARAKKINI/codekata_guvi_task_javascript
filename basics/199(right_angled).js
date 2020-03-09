const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
inp.on("line",(data)=>{
    var n1=data.split(' ')
    var a=Math.pow(n1[0],2)
    var b=Math.pow(n1[1],2)
    var c=Math.pow(n1[2],2)
    var d;
    var e;
    d=a+b;
    e=(c*c);
    if(parseInt(d)==parseInt(c)){
    console.log('yes');
    }
    else{
     console.log('no');
    }
});
