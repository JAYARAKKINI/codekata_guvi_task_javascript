const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
const n=[];
inp.on("line",(data)=>{n.push(data);
});
inp.on("close",()=>{
    var n1=n[0].split(' ')
    var a=n1[0]
    var b=n1[1]
    var c=n1[2]
    var root1=(-b+(Math.sqrt((b*b)-(4*a*c))))/(2*a)
    var root2=(-b-(Math.sqrt((b*b)-(4*a*c))))/(2*a)
    console.log(root1.toFixed(2));
    console.log(root2.toFixed(2));
});
