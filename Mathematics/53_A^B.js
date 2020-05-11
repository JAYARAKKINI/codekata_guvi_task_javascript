const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
inp.on("line",(data)=>{
    var n=[];
    n=data.split(" ");
    var N=n[0];
    var M=n[1];
    var L;
    L=Math.pow(parseInt(N),parseInt(M));
    console.log(L);
});
