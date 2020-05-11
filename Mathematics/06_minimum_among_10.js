const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
inp.on("line",(data)=>{
    var n1=data.split(' ')
    console.log(Math.min.apply(null, n1));
});
