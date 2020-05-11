const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
inp.on("line",(data)=>{
    var n=[];
    n=data.split(" ");
    var N=n[0];
    var M=n[1];
    var area;
    area=(1/2)*(parseInt(N)*parseInt(M));
    console.log(area)
});
