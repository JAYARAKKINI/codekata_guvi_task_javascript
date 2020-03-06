const readline=require('readline');
const inp=readline.createInterface({input:process.stdin})
inp.on("line",(data)=>{
    var a=data.split(" ");
    var p=a[0]
    var r=a[1]
    var t=a[2]
    var si=(parseInt(p)*parseInt(r)*parseInt(t))/100
    console.log(si.toFixed(2));
});
