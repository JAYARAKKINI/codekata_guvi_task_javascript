const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
inp.on("line",(data)=>{
    var n1=data.split(' ')
    console.log(n1[1],n1[0]);
});
