const readline=require("readline");
const inp=readline.createInterface({input:process.stdin});
inp.on("line",(data)=>{
    var a=data.split("");
    var sum;
    var b;
    b=a.length
    sum=parseInt(a[0])+parseInt(a[b-1])
    console.log(sum)
});

